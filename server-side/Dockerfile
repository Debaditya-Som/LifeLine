FROM openjdk:17-jdk-alpine

WORKDIR /app
COPY . /app

COPY ./mvnw ./
RUN chmod +x ./mvnw
RUN ./mvnw  -B -DskipTests clean package

EXPOSE 8080

CMD ["java", "-jar", "target/BloodBank-0.0.1-SNAPSHOT.jar"]