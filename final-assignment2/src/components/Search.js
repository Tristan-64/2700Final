import React from 'react';
import { Form } from 'react-bootstrap';

const Search = ({ search, setSearch }) => (
  <Form className="my-3">
    <Form.Control
      type="text"
      placeholder="Search characters..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </Form>
);

export default Search;