I.     Perform the following  DB operations using Cassandra. 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Create  a keyspace by name Employee
  CREATE KEYSPACE Employee with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
2. Create a column family by name Employee-Info with attributes Emp_Id Primary Key, Emp_Name, Designation, Date_of_Joining, Salary, Dept_Name
  USE Employee ;
> CREATE COLUMNFAMILY Employee_Info(
    Emp_Id int primary key,
    Emp_Name text,
    Designation text,
    Date_Of_Joining text,
    Salary float,
    Dept_Name text
  );
3. Insert the values into the table in batch
  BEGIN BATCH
 ... INSERT INTO Employee_info(Emp_id, Emp_name,Designation,Date_Of_Joining, Salary, Dept_Name) values(111, 'Harry','Manager','08-10-2017',50000,'Sales');
 ... INSERT INTO Employee_info(Emp_id, Emp_name,Designation,Date_Of_Joining, Salary, Dept_Name) values(201, 'Megan','Technical Staff','10-12-2019',30000,'Development');
 ...INSERT INTO Employee_info(Emp_id, Emp_name,Designation,Date_Of_Joining, Salary, Dept_Name) values(121, 'Kate','Senior Manager','25-01-2015',1000000,'Marketing');
 ...INSERT INTO Employee_info(Emp_id, Emp_name,Designation,Date_Of_Joining, Salary, Dept_Name) values(123, 'Kingston','Software Engineer','08-10-2017',450000,'Development');
 ... APPLY BATCH;
4. Update Employee name and Department of Emp-Id 121
    UPDATE Employee_info set Emp_name = 'Battula Pragati',Dept_Name='Sales' where emp_id=121;
5. Alter the schema of the table Employee_Info to add a column Projects which stores a set of Projects done by the corresponding Employee.
    alter table employee_info add projects set<text>;
6. Update the altered table to add project names.
    UPDATE employee_info SET projects = {'A', 'B','C'} WHERE emp_id = 121;
7.Create a TTL of 15 seconds to display the values of Employees.
    INSERT INTO Employee_info(Emp_id, Emp_name,Designation,Date_Of_Joining, Salary, Dept_Name) values(101, 'Tracy','Technical Staff','11-11-2019',30000,'Development') USING TTL 15;
    SELECT ttl(emp_name) from employee_info where emp_id=101;
    
II.     Perform the following  DB operations using Cassandra.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.Create  a keyspace by name Library
   CREATE KEYSPACE library;
2. Create a column family by name Library-Info with attributes Stud_Id Primary Key,Counter_value of type Counter,Stud_Name, Book-Name, Book-Id, Date_of_issue
    CREATE COLUMNFAMILY library_info(
            counter_value counter,
            student_id int,
            stud_name varchar,
            book_name varchar,
            book_id int,
            date_of_issue varchar,
            PRIMARY KEY(student_id,stud_name,book_name,book_id,date_of_issue)
);
3. Insert the values into the table in batch
    UPDATE library_info SET counter_value=counter_value+1 WHERE student_id=1 AND stud_name='Harry' AND book_name='ABC' AND book_id=12321 AND date_of_issue='08-10-2020';
    UPDATE library_info SET counter_value=counter_value+1 WHERE student_id=2 AND stud_name='Tracy' AND book_name='AAA' AND book_id=13221 AND date_of_issue='10-10-2020';
    UPDATE library_info SET counter_value=counter_value+1 WHERE student_id=3 AND stud_name='Kumar' AND book_name='BBB' AND book_id=75342 AND date_of_issue='20-11-2020';
    UPDATE library_info SET counter_value=counter_value+1 WHERE student_id=4 AND stud_name='Alexa' AND book_name='CCC' AND book_id=43122 AND date_of_issue='08-12-2020';
    UPDATE library_info SET counter_value=counter_value+1 WHERE student_id=5 AND stud_name='Tessa' AND book_name='XXX' AND book_id=22321 AND date_of_issue='22-11-2020';
3.  Display the details of the table created and increase the value of the counter
    DESCRIBE library_info ;
    select * from library_info;
    UPDATE library_info SET counter_value=counter_value+1 WHERE student_id=2 AND stud_name='Tracy' AND book_name='AAA' AND book_id=13221 AND date_of_issue='10-10-2020';

4. Write a query to show that a student with id 112 has taken a book “BDA” 2 times.
    select book_name,counter_value from library_info where student_id=2;
5. Export the created column to a csv file
    copy library_info(counter_value,student_id,stud_name,book_name,book_id,date_of_issue) to 'C:\Users\Pragati\Desktop\College\BDA\Lab\lab 6\program2\library_info.csv';
6. Import a given csv dataset from local file system into Cassandra column family
    COPY library_info_duplicate FROM 'C:\Users\Pragati\Desktop\College\BDA\Lab\lab 6\program2\library_info.csv';
