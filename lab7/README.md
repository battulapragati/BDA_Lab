Question:
Execute Map Reduce in Hadoop.

Install Hadoop
Create the input file on the desktop and name it input.txt

Enter the following commands:
1. su - hadoopusr
2. start-all.sh
3. jps
4. hadoop fs -ls /
5. Create a new directory (if needed) hadoop fs -mkdir /lab
6. Move the input file to hadoop system: hadoop fs -copyFromLocal /home/pragati/Desktop/input  /lab/textfile.txt
7. Execute Map reduce program: hadoop jar /home/pragati/Desktop/wordcount.jar  WordCount  /lab/textfile.txt  /lab/output
8. To display output on the terminal: hadoopfs -cat /lab/output/part-r-00000

Output:
![1](https://user-images.githubusercontent.com/53899365/102468093-1c004e00-4077-11eb-8e1a-fa71e7bb3c34.png)
![2](https://user-images.githubusercontent.com/53899365/102468098-1d317b00-4077-11eb-8693-3d0bc9059fa4.png)
![3](https://user-images.githubusercontent.com/53899365/102468104-1efb3e80-4077-11eb-9805-797ac3872186.png)
  
