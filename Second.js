import React from "react";
import { component } from "react";
class ExpensesEntryItem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <b>Item:</b>
          <em>mango juice</em>
        </div>
        <div>
          <b>Category:</b>
          <em>food</em>
        </div>
      </div>
    );
  }
}
export default ExpensesEntryItem;
