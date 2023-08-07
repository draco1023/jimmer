plugins {
    `java-library`
    kotlin("jvm") version "1.6.10"
    id("com.google.devtools.ksp") version "1.7.10-1.0.6"
    id("maven-publish")
    id("signing")
}

group = "org.babyfish.jimmer"

repositories {
    mavenCentral()
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
    withSourcesJar()
    withJavadocJar()
}

dependencies {

    api(project(":jimmer-sql"))
    api(project(":jimmer-sql-kotlin"))
    api(project(":jimmer-client"))
    api("org.springframework.boot:spring-boot-starter-jdbc:2.7.0")
    api("org.springframework.data:spring-data-commons:2.7.0")
    api("com.fasterxml.jackson.module:jackson-module-kotlin:2.15.2")

    compileOnly("org.springframework.boot:spring-boot-starter-web:2.7.0")
    compileOnly("org.springframework.data:spring-data-redis:2.7.0")
    compileOnly( "com.github.ben-manes.caffeine:caffeine:2.9.1")
    compileOnly("org.springframework.graphql:spring-graphql:1.0.0")
    compileOnly("io.swagger.core.v3:swagger-annotations:2.2.2")
    compileOnly("io.springfox:springfox-core:3.0.0")
    compileOnly("jakarta.platform:jakarta.jakartaee-api:9.0.0")
    compileOnly("org.springdoc:springdoc-openapi-common:1.7.0")

    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor:2.7.0")
    testAnnotationProcessor(project(":jimmer-apt"))
    kspTest(project(":jimmer-ksp"))

    testImplementation("org.projectlombok:lombok:1.18.28")
    testAnnotationProcessor("org.projectlombok:lombok:1.18.28")

    testImplementation("org.springframework.boot:spring-boot-starter-test:2.7.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.6.0")
    testImplementation("com.h2database:h2:2.1.212")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
    testImplementation("org.springframework.boot:spring-boot-starter-web:2.7.0")
}

kotlin {
    sourceSets.test {
        kotlin.srcDir("build/generated/ksp/test/kotlin")
    }
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}

tasks.withType<Javadoc>{
    options.encoding = "UTF-8"
}

tasks.withType<JavaCompile> {
    /*
     * it must be compiled with parameters
     * when using @ConstructorBinding in Spring Native Image
     */
    options.compilerArgs.add("-parameters")
    options.compilerArgs.add("-Ajimmer.dto.dirs=src/test/dto")
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "1.8"
    }
}

ksp {
    arg("jimmer.source.excludes", "org.babyfish.jimmer.spring.java")
    arg("jimmer.dto.dirs", "src/test/dto")
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
                description.set("A revolutionary ORM framework for both java and kotlin")
                url.set("https://github.com/babyfish-ct/jimmer")
                licenses {
                    license {
                        name.set("Apache-2.0")
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
