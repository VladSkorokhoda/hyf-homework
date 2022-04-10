USE homework;
SHOW TABLES;
SELECT * FROM task;
SHOW COLUMNS FROM user;
ALTER Table task ADD(user_id int unsigned);
SELECT * FROM status;
SELECT * FROM user;

INSERT INTO task ( title, description, created, updated, due_date, status_id, user_id)
VALUES ( "Cleaning", "Clean rooms, keatchens","2022-04-06" , "2022-04-06", "2022-05-06", 2, 7);
SELECT * FROM task;
UPDATE task
SET title = "VWOW Cleaning"
WHERE id = 36;
UPDATE task
SET due_date = "2022-07-06"
WHERE id = 36;
UPDATE task t
SET t.status_id = 3
WHERE id = 36;
-- Mark a task as complete status Id is alredy done
DELETE FROM  task
WHERE id = 36;
SELECT * FROM  task;
-- Part 2: School database
CREATE DATABASE myclass;
USE myclass;
SHOW TABLES;
CREATE TABLE class
(id INT(5) NOT NULL AUTO_INCREMENT, 
name VARCHAR(50) NOT NULL,
begins DATE,
ends DATE,
CONSTRAINT class_pk PRIMARY KEY (id)
);
-- id, name, begins (date), ends (date)
CREATE TABLE student
(id INT(5) NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
email VARCHAR(50),
phone VARCHAR(20),
class_id INT(5) NOT NULL,
CONSTRAINT student_pk PRIMARY KEY(id),
CONSTRAINT fk_class
FOREIGN KEY (class_id)
REFERENCES class(id)
);
--id, name, email, phone, class_id (foreign key)
CREATE INDEX studentname
ON student (name);
ALTER TABLE class ADD (status enum('not-started', 'on-going', 'finished') NOT NULL);
SELECT * FROM class;
--Part 3: More queries
USE homework;
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.*, u.email
FROM user u
	INNER JOIN user_task ut on ut.user_id = u.id
	INNER JOIN task t on t.id = ut.task_id
WHERE u.email LIKE '%@spotify.com';
--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT u.*, s.name
FROM user u
	INNER JOIN user_task ut on ut.user_id = u.id
	INNER JOIN task t on t.id = ut.task_id
	INNER JOIN status s on s.id = t.status_id
WHERE u.name = 'Donald Duck'
	and s.name = 'Not started';
--Get all the tasks for 'Maryrose Meadows' that were created in september
-- (hint: month(created)=month_number)
SELECT t.*, s.name, t.created
FROM user u
	INNER JOIN user_task ut on ut.user_id = u.id
	INNER JOIN task t on t.id = ut.task_id
	INNER JOIN STATUS s on s.id = t.status_id
WHERE u.name = 'Maryrose Meadows'
	AND month(t.created) = 9;
--Find how many tasks where created in each month, 
SELECT month(t.created) created_month, count(t.id) as 'created in month'
FROM task t
group by created_month;
--e.g. how many tasks were created in october, 
SELECT month(t.created) created_month, count(t.id) as 'created in october'
FROM task t
WHERE month(t.created) = 10
GROUP by created_month;
--how many tasks were created in november, etc. 
SELECT month(t.created) created_month, count(t.id) as 'created in november'
FROM task t
WHERE month(t.created) = 11
GROUP by created_month;
--(hint: use group by)