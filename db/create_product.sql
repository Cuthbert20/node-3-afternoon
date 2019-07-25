-- The SQL should be able to add a new product to the products table.
INSERT INTO product (name, description, price, image_url) VALUES ($1, $2, $3, $4);