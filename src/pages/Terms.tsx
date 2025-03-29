
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <div className="container-custom py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: March 17, 2025</p>
          
          <section className="mb-8">
            <p>
              Please review our Terms & Conditions carefully. This page is under construction and will be updated soon with detailed information about our terms of service.
            </p>
          </section>
          
          <section className="mb-8">
            <p>
              For any questions regarding our Terms & Conditions, please contact us at info@huntnhire.co.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
