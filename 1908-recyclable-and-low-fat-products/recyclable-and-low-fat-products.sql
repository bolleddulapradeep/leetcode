# Write your MySQL query statement below
select product_id  from Products where low_fats = 'Y' intersect select product_id  from Products where recyclable  = 'Y'