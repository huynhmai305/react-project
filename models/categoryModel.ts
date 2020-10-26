export type Category = {
  id?: number;
  name?: string;
  total_product?: number;
};

export type CategoryList = Category[];

export interface CategoryTableProps {
  categories: CategoryList;
}

export interface FormCategoryProps {
  category?: Category;
  show: boolean;
  handleClose: () => void;
  handleAction: (category: Category) => void;
}
