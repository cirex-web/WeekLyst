import * as React from 'react';

import css from "styles/list.module.css";
import AddIcon from '@mui/icons-material/Add';
import EmptyPlaceholder from 'components/EmptyPlaceholder';
import Input from 'components/Input';
export interface IListProps {
}

export default function List(props: IListProps) {
  return (
    <div>
      
      {/* <EmptyPlaceholder text="You don't have any weekly tasks yet! Create one below." height="100px" /> */}
      <div className={css.addButton}><AddIcon /></div>
    </div>
  );
}
