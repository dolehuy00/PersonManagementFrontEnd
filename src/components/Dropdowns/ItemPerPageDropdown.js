import React, { useEffect, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

const ItemPerPageDropdown = ({itemPerPage, onSelectChange }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const arrayItems = [5, 10, 30, 50, 100]

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra nếu click ra ngoài dropdown và button
      if (
        popoverDropdownRef.current &&
        !popoverDropdownRef.current.contains(event.target) &&
        btnDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target)
      ) {
        closeDropdownPopover();
      }
    };

    // Thêm event listener khi dropdown mở
    if (dropdownPopoverShow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener khi component unmount hoặc khi dropdown đóng
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownPopoverShow]);

  const handleSelect = (itemPerPage) => {
    onSelectChange(itemPerPage);
  };

  return (
    <>
      <button
        className="text-sky-500 bg-transparent border border-solid border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="far fa-hand-paper"></i>  Item per page: {itemPerPage}
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-max"
        }
      >
        {arrayItems.map((value) => (
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => {
              e.preventDefault();
              closeDropdownPopover();
              handleSelect(value)
            }}
          >
            Item per page: {value}
          </a>
        ))}
      </div>
    </>
  );
};

export default ItemPerPageDropdown;
