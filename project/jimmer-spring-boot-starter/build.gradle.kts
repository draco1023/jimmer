plugins {
    `java-library`
    kotlin("jvm") version "1.6.10"
    id("maven-publish")
    id("signing")
}

group = "org.babyfish.jimmer"
version = "0.5.14"

repositories {
    mavenCentral()
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_9
    targetCompatibility = JavaVersion.VERSION_1_9
    withSourcesJar()
    withJavadocJar()
}

dependencies {
    api(project(":jimmer-sql"))
    api(project(":jimmer-sql-kotlin"))
    api(project(":jimmer-client"))
    api("org.springframework.boot:spring-boot-starter-web:2.7.0")
    api("org.springframework:spring-jdbc:5.3.20")
    api("org.springframework.data:spring-data-commons:2.7.0")
    api("org.springframework.data:spring-data-redis:2.7.0")
    api( "com.github.ben-manes.caffeine:caffeine:2.9.1")
    testAnnotationProcessor(project(":jimmer-apt"))
    testImplementation("org.springframework.boot:spring-boot-starter-test:2.7.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.6.0")
    testImplementation("com.h2database:h2:2.1.212")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}

// Publish to maven-----------------------------------------------------
val NEXUS_USERNAME: String by project
val NEXUS_PASSWORD: String by project

publishing {
    repositories {
        maven {
            credentials {
                username = NEXUS_USERNAME
                password = NEXUS_PASSWORD
            }
            name = "MavenCentral"
            url = if (project.version.toString().endsWith("-SNAPSHOT")) {
                uri("https://oss.sonatype.org/content/repositories/snapshots")
            } else {
                uri("https://oss.sonatype.org/service/local/staging/deploy/maven2/")
            }
        }
    }
    publications {
        register("mavenJava", MavenPublication::class) {
            artifactId = "jimmer-spring-boot-starter"
            from(components["java"])
            pom {
                name.set("jimmer")
                description.set("immer for java")
                url.set("https://github.com/babyfish-ct/jimmer")
                licenses {
                    license {
                        name.set("MIT")
                        url.set("https://github.com/babyfish-ct/jimmer/blob/main/LICENSE")
                    }
                }
                developers {
                    developer {
                        id.set("babyfish-ct")
                        name.set("陈涛")
                        email.set("babyfish.ct@gmail.com")
                    }
                }
                scm {
                    connection.set("scm:git:git://github.com/babyfish-ct/jimmer.git")
                    developerConnection.set("scm:git:ssh://github.com/babyfish-ct/jimmer.git")
                    url.set("https://github.com//babyfish-ct/jimmer")
                }
            }
        }
    }
}

signing {
    sign(publishing.publications["mavenJava"])
}