SELECT material_info.name, cubicated_sum, released_sum, purchase_sum, ticket_sum
FROM (
  SELECT material_id, SUM(quantity) AS cubicated_sum
  FROM cubicated_quantities
  GROUP BY material_id ) a_sum
  JOIN 
     (
  SELECT material_id, SUM(quantity) AS released_sum
  FROM released_quantities
  GROUP BY material_id) b_sum 
  ON (a_sum.material_id = b_sum.material_id)
  JOIN 
     (
  SELECT material_id, SUM(quantity) AS purchase_sum
  FROM purchase_order_details
  GROUP BY material_id ) c_sum 
  ON (a_sum.material_id = c_sum.material_id)
  JOIN 
     (
  SELECT material_id, SUM(quantity) AS ticket_sum
  FROM ticket_details
  GROUP BY material_id ) d_sum 
  ON (a_sum.material_id = d_sum.material_id)
  JOIN 
     (
  SELECT *
  FROM material) material_info 
  ON (a_sum.material_id = material_info.id);