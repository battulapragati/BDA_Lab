**Hadoop Average temperature program**


1.su hduser

2.start-all.sh

3.jps

4.export HADOOP_CLASSPATH=$(hadoop classpath)

5.hadoop fs -mkdir /AverageTemperature

6.hadoop fs -mkdir /AverageTemperature/Input

7.hadoop fs -put '/home/pragati/Desktop/Hadoop/averageTemperature/input_data/input.txt' /AverageTemperature/Input

8.sudo javac -classpath ${HADOOP_CLASSPATH} -d '/home/pragati/Desktop/Hadoop/averageTemperature/average_temperture_classes' '/home/pragati/Desktop/Hadoop/averageTemperature/AverageDriver.java' '/home/pragati/Desktop/Hadoop/averageTemperature/AverageReducer.java' '/home/pragati/Desktop/Hadoop/averageTemperature/AverageMapper.java'

9.jar -cvf averageTemperature.jar -C average_temperature_classes/ 

10.hadoop jar '/home/chandana/Desktop/Hadoop/averageTemperature/averageTemperature.jar' AverageDriver /AverageTemperature/Input /AverageTemperature/Output

11.hadoop fs -cat /AverageTemperature/Output/part-r-00000

![1](https://user-images.githubusercontent.com/53899365/102691733-9f1ad300-4234-11eb-9998-36bb66943c48.jpg)

