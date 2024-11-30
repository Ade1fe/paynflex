import { useState, useEffect } from 'react';

export interface Transaction {
  id: string;
  image: string;
  title: string;
  amount: string;
  type: string;
}

export const useRecentTransactions = () => {
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);

    
      setTimeout(() => {
        setRecentTransactions([
          { id: '1', image: 'https://via.placeholder.com/50', title: 'Netflix', amount: '-₦4,400', type: 'Subscription' },
          { id: '2', image: 'https://via.placeholder.com/50', title: 'Amazon', amount: '₦120,000', type: 'Subscription' },
          { id: '3', image: 'https://via.placeholder.com/50', title: 'Udemy', amount: '₦25,650', type: 'Purchase' },
          { id: '4', image: 'https://via.placeholder.com/50', title: 'Facebook', amount: '₦34,231', type: 'Purchase' },
          { id: '5', image: 'https://via.placeholder.com/50', title: 'Google', amount: '₦1,349', type: 'Purchase' },
          { id: '6', image: 'https://via.placeholder.com/50', title: 'Apple', amount: '₦20,000', type: 'Subscription' },
          { id: '7', image: 'https://via.placeholder.com/50', title: 'Spotify', amount: '₦1,000', type: 'Subscription' },
        ]);
        setIsLoading(false);
      }, 1500);
    };

    fetchTransactions();
  }, []);

  return { recentTransactions, isLoading };
};
