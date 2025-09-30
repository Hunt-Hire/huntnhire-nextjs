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

  const generateSlug = (input: string): string => {
    return input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

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
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((d) => {
        const b = d.data() as Blog;
        return {
          id: d.id,
          ...b,
          metaKeywords: b.metaKeywords || [],
          tags: b.tags || [],
        };
      });
      setBlogs(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogById = async (id: string): Promise<Blog | null> => {
    try {
      const ref = doc(db, "blogs", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const b = snap.data() as Blog;
        return {
          id: snap.id,
          ...b,
          metaKeywords: b.metaKeywords || [],
          tags: b.tags || [],
        };
      }
      return null;
    } catch (err: any) {
      setError(err.message);
      return null;
    }
  };

  const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
    try {
      const q = query(blogsCollection, where("slug", "==", slug));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const d = snapshot.docs[0];
        const b = d.data() as Blog;
        return {
          id: d.id,
          ...b,
          metaKeywords: b.metaKeywords || [],
          tags: b.tags || [],
        };
      }
      return null;
    } catch (err: any) {
      setError(err.message);
      return null;
    }
  };

  const createBlog = async (
    blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const ref = await addDoc(blogsCollection, {
        ...blogData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      await fetchBlogs();
      return ref.id;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const updateBlog = async (id: string, blogData: Partial<Blog>) => {
    try {
      const ref = doc(db, "blogs", id);
      await updateDoc(ref, { ...blogData, updatedAt: serverTimestamp() });
      await fetchBlogs();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      const ref = doc(db, "blogs", id);
      await deleteDoc(ref);
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
