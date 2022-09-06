import { Box, Button } from "@chakra-ui/react";

export const Pagination = ({ total, selected, onPageChange }) => {
  let page = new Array(total).fill(0);
  return (
    <div className="pageContainer">
      <Button
        disabled={selected === 1 ? true : false}
        onClick={() => onPageChange("Prev")}
      >
        Prev
      </Button>
      
      {page?.map((item, index) => {
          return (
              <Button
              onClick={() => onPageChange(index+1)}
              m={1}
              key={index}
              className={+selected === index + 1 ? "btnselected" : ""}
              >
            {index + 1}
          </Button>
        );
    })}
    
      <Button
        disabled={selected === total ? true : false}
        onClick={() => onPageChange("Next")}
      >
        Next
      </Button>
    </div>
  );
};
