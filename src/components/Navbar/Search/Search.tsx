/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import TextField from "@material-ui/core/TextField";
import styles from "./Search.module.css";

const Search: React.FC = () => {
  return (
    <TextField
      css={css`
        .MuiInputLabel-root.Mui-focused {
          color: dimgray;
        }
      `}
      className={styles.search}
      label="Search"
      variant="filled"
      InputProps={{ className: styles.input }}
      InputLabelProps={{ className: styles.label }}
    />
  );
};

export default Search;
