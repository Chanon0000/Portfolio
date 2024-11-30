import React from 'react';
import Image from 'next/image';  // นำเข้า Image จาก next/image

const Home: React.FC = () => {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '50vh',
          textAlign: 'center',
        }}
      >
        <a href="https://github.com/Chanon0000" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/profile.jpg"  // รูปภาพที่เก็บใน public
            alt="Chanon Khemthong Profile Picture"  // เพิ่มคำบรรยายภาพ
            width={150}  // กำหนดขนาด width
            height={150} // กำหนดขนาด height
            style={{
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginBottom: '1rem'
            }} 
          />
        </a>
        <h1>Chanon Khemthong 007</h1>
      </header>
      <main>
        <section
          style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          <h2>About Me</h2>
          <p>20 years old, studying at Phayao University. I don't like vegetables, I like to play sports.</p>
        </section>
        <section
          style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          <h2>Skills Me</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>TailwindCSS, Styled-Components</li>
            <li>Figma, Adobe XD</li>
          </ul>
        </section>
        <section
          style={{
            backgroundColor: '#e7ffe7',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          <h2>Portfolio Me</h2>
          <ul>
            <li>
              <a href=" " target="_blank" rel="noopener noreferrer">
                Project 1 - E-commerce Website
              </a>
            </li>
            <li>
              <a href=" " target="_blank" rel="noopener noreferrer">
                Project 2 - Portfolio Website
              </a>
            </li>
          </ul>
        </section>
        <section
          style={{
            backgroundColor: '#fff3e7',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:66022534@up.ac.th">66022534@up.ac.th</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/Chanon0000" target="_blank" rel="noopener noreferrer">github.com/Chanon0000</a>
          </p>
        </section>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <p>&copy; {new Date().getFullYear()} Chanon. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
