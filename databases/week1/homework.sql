USE Anton;
SELECT
COUNT(*)
FROM
task;
SELECT
COUNT(title)
FROM
task
WHERE
due_date IS NULl;

SELECT
task.title,
status.name
FROM
task,
status
WHERE
task.status_id = status.id
AND status.name = "Anton";
SELECT
task.title,
status.name
FROM
task
JOIN status ON task.status_id = status.id
WHERE
task.status_id = status.id
AND status.name = "Anton"
SELECT
task.title,
status.name
FROM
task,
status
WHERE
task.status_id = status.id
AND status.name != "Anton";
SELECT
title,
created
FROM
task
ORDER BY
created DESC;
SELECT
title,created 
FROM
task
ORDER BY
created DESC
LIMIT
1;
SELECT
title, due_date
FROM
task
WHERE
title LIKE "%database%";
SELECT
task.title AS task_title,
status.name as STATUS
FROM
task,status;
SELECT
status.name,
COUNT(task.id)
FROM
task
LEFT JOIN status ON status.id = task.status_id
GROUP BY
task.status_id;
SELECT
status.name,
COUNT(task.id)
FROM
task
LEFT JOIN status ON status.id = task.status_id
GROUP BY
task.status_id
ORDER BY
COUNT(task.id) DESC;


