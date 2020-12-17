Question Execute Map Reduce in Hadoop.

Install Hadoop
Create the input file name it input.txt

Enter the following commands:
1. su - hadoopusr
2. start-all.sh
3. jps
4. hadoop fs -ls /
5. Create a new directory (if needed) hadoop fs -mkdir /lab
6. Move the input file to hadoop system: hadoop fs -copyFromLocal /home/pragati/Desktop/input  /lab/textfile.txt
7. Execute Map reduce program: hadoop jar /home/pragati/Desktop/wordcount.jar  WordCount  /lab/textfile.txt  /lab/output
8. To display output on the terminal: hadoopfs -cat /lab/output/part-r-00000
  
