// hooks/useBlogs.ts
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

export interface Blog {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  published: boolean;
  createdAt: any;
  updatedAt: any;
  tags?: string[];
  featuredImage?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const blogsCollection = collection(db, "blogs");

  // Generate slug
  const generateSlug = (input: string): string => {
    return input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // Fetch all blogs
  const fetchBlogs = async (publishedOnly: boolean = false) => {
    setLoading(true);
    setError(null);
    try {
      let q = query(blogsCollection, orderBy("createdAt", "desc"));

      if (publishedOnly) {
        q = query(
          blogsCollection,
          where("published", "==", true),
          orderBy("createdAt", "desc")
        );
      }

      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((d) => {
        const data = d.data() as Blog;
        return {
          id: d.id,
          ...data,
          metaKeywords: data.metaKeywords || [],
          tags: data.tags || [],
        };
      });

      setBlogs(blogsData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single blog by ID
  const fetchBlogById = async (id: string): Promise<Blog | null> => {
    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as Blog;
        return {
          id: docSnap.id,
          ...data,
          metaKeywords: data.metaKeywords || [],
          tags: data.tags || [],
        };
      }
      return null;
    } catch (err: any) {
      setError(err.message);
      return null;
    }
  };

  // Fetch single blog by slug
  const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
    try {
      const q = query(blogsCollection, where("slug", "==", slug));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const d = querySnapshot.docs[0];
        const data = d.data() as Blog;
        return {
          id: d.id,
          ...data,
          metaKeywords: data.metaKeywords || [],
          tags: data.tags || [],
        };
      }
      return null;
    } catch (err: any) {
      setError(err.message);
      return null;
    }
  };

  // Create new blog
  const createBlog = async (
    blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const docRef = await addDoc(blogsCollection, {
        ...blogData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      await fetchBlogs();
      return docRef.id;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  // Update blog
  const updateBlog = async (id: string, blogData: Partial<Blog>) => {
    try {
      const docRef = doc(db, "blogs", id);
      await updateDoc(docRef, {
        ...blogData,
        updatedAt: serverTimestamp(),
      });
      await fetchBlogs();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  // Delete blog
  const deleteBlog = async (id: string) => {
    try {
      const docRef = doc(db, "blogs", id);
      await deleteDoc(docRef);
      await fetchBlogs();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    loading,
    error,
    fetchBlogs,
    fetchBlogById,
    fetchBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
    generateSlug,
  };
};
