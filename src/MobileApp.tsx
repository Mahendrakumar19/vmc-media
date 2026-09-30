import React from 'react';

const MobileOptimizedApp = () => {
  const services = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Google Ads Management', 
    'Web Development',
    'Branding & Design',
    'Lead Generation'
  ];

  return (
    <div style={{ 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      maxWidth: '100%',
      margin: 0,
      padding: 0
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          margin: '0 0 10px 0', 
          fontWeight: 'bold' 
        }}>
          VMC Media
        </h1>
        <p style={{ 
          fontSize: '16px', 
          margin: 0, 
          opacity: 0.9 
        }}>
          Full-Service Digital Marketing & SEO Partner
        </p>
      </header>

      {/* Main Content */}
      <main style={{ padding: '30px 20px' }}>
        {/* About Section */}
        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '15px', 
            color: '#2c3e50' 
          }}>
            Grow Your Business Online
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            We help businesses increase their online visibility and drive more qualified leads through proven digital marketing strategies.
          </p>
        </section>

        {/* Services Section */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ 
            fontSize: '20px', 
            marginBottom: '20px', 
            textAlign: 'center',
            color: '#2c3e50' 
          }}>
            Our Services
          </h3>
          <div style={{
            display: 'grid',
            gap: '15px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          textAlign: 'center',
          background: '#f8f9fa',
          padding: '30px 20px',
          borderRadius: '10px',
          margin: '40px 0'
        }}>
          <h3 style={{ 
            fontSize: '20px', 
            marginBottom: '15px',
            color: '#2c3e50' 
          }}>
            Ready to Get Started?
          </h3>
          <p style={{ 
            marginBottom: '20px', 
            color: '#666' 
          }}>
            Contact us today for a free consultation
          </p>
          <a 
            href="mailto:info@vmcmedia.com"
            style={{
              display: 'inline-block',
              background: '#007bff',
              color: 'white',
              padding: '12px 30px',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Get Free Consultation
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#2c3e50',
        color: 'white',
        textAlign: 'center',
        padding: '30px 20px'
      }}>
        <p style={{ margin: '0 0 10px 0' }}>
          © 2024 VMC Media - All Rights Reserved
        </p>
        <p style={{ 
          margin: 0, 
          fontSize: '14px', 
          opacity: 0.8 
        }}>
          Professional SEO & Digital Marketing Services
        </p>
      </footer>
    </div>
  );
};

export default MobileOptimizedApp;


