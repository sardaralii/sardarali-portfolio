import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                Hello, I’m Sardar Ali, an aspiring DevOps Engineer passionate about automation, cloud computing, and designing scalable infrastructure.
              </p>

              <h4 className="mt-4">Learning Journey</h4>
              <p>
               I started my DevOps journey with a 6-month training at STP Gilgit, earning my certification and gaining practical experience with tools like Docker, Kubernetes, Jenkins, Git, and Terraform, as well as AWS and Azure cloud services. I then worked as a DevOps Engineer at Cloudlem for a year before focusing on my BSCS at Karakoram International University. Currently, I’m working remotely with Alicloud Nexus, managing CI/CD pipelines, automating infrastructure, and deploying cloud-based solutions.
              </p>
              <p>
                I believe DevOps is about driving efficiency through automation, collaboration, and continuous improvement. I apply my skills in real-world projects—designing CI/CD pipelines, automating infrastructure, and deploying scalable solutions on AWS and Azure—while staying current with the latest tools and best practices
              </p>

              <h4 className="mt-4">DevOps Mindset</h4>
              <p>
               I see DevOps as a culture of continuous improvement, driven by automation, collaboration, and innovation. I focus on applying my skills to real-world projects—streamlining workflows, building efficient CI/CD pipelines, and automating infrastructure—while consistently exploring emerging tools and technologies to stay ahead in the field.
              </p>

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I document my learning journey and insights on <a href="https://alicloudnexus.com/" target="_blank" rel="noopener noreferrer"><u>Our company website</u></a>, sharing practical solutions and challenges encountered in the DevOps space.
              </p>

              <h4 className="mt-4">Interests</h4>
              <p>
                Beyond work, I enjoy exploring emerging technologies, engaging with tech communities, and staying abreast of trends in cloud-native development, system design, and infrastructure automation.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                Feel free to reach out via email at <a href="sardaaralee.cloudlem@gmail.com">sardaaralee.cloudlem@gmail.com</a>. I’m open to collaboration, mentorship, and opportunities in DevOps and cloud engineering.
              </p>
            </Card.Body>



          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;