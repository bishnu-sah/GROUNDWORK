import React from 'react';
import Navbar from '../components/Navbar';
import InsightsHero from '../components/InsightsHero';
import CategoryTabs from '../components/CategoryTabs';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleGrid from '../components/ArticleGrid';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export const Insights: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#111111]">
      <Navbar />
      <main>
        <InsightsHero />
        <CategoryTabs />
        <FeaturedArticle />
        <ArticleGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
