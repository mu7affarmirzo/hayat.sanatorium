import { usePostGetCategoryMutation } from 'features/patient/service';
import { useState, useCallback } from 'react';

export type Category = {
  id: number;
  name: string;
  code: string;
  category: number;
};

const useCategoryFetcher = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [fetchGetCategory] = usePostGetCategoryMutation();

  const fetchCategories = useCallback(
    async (categoryName: string) => {
      setLoading(true);
      try {
        const response = await fetchGetCategory({
          category: categoryName,
        });
        if ('data' in response) {
          setCategories(response.data);
          setOpen(true);
        } else if ('error' in response) {
          console.error('Error fetching categories:', response.error);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    },
    [fetchGetCategory],
  );

  return { categories, loading, fetchCategories, open, setOpen };
};

export default useCategoryFetcher;
