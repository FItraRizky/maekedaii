import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, StarIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline';
import { teamData } from '../data/menuData';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <HeartIcon className="value-icon" />,
      title: "Dibuat dengan Cinta",
      description: "Setiap hidangan kami dibuat dengan penuh cinta dan perhatian detail untuk memberikan pengalaman kuliner terbaik."
    },
    {
      icon: <StarIcon className="value-icon" />,
      title: "Kualitas Terjamin",
      description: "Kami hanya menggunakan bahan-bahan segar dan berkualitas tinggi yang dipilih langsung dari supplier terpercaya."
    },
    {
      icon: <UsersIcon className="value-icon" />,
      title: "Pelayanan Ramah",
      description: "Tim kami yang berpengalaman siap melayani Anda dengan senyuman dan keramahan yang tulus."
    },
    {
      icon: <ClockIcon className="value-icon" />,
      title: "Selalu Fresh",
      description: "Makanan dan minuman kami selalu dibuat fresh setiap hari untuk menjaga cita rasa dan kualitas."
    }
  ];

  const achievements = [
    { number: "5+", label: "Tahun Berpengalaman" },
    { number: "1000+", label: "Pelanggan Puas" },
    { number: "50+", label: "Menu Pilihan" },
    { number: "4.8", label: "Rating Pelanggan" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Tentang Kedai Mae</h1>
            <p className="hero-subtitle">
              Perjalanan kami dimulai dari kecintaan terhadap cita rasa autentik Indonesia
            </p>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Cerita Kami</h2>
              <div className="story-text">
                <p>
                  Kedai Mae lahir dari mimpi sederhana untuk menghadirkan cita rasa autentik Indonesia 
                  dalam suasana yang hangat dan nyaman. Dimulai pada tahun 2019, kami berkomitmen 
                  untuk menyajikan hidangan berkualitas dengan harga yang terjangkau.
                </p>
                <p>
                  Nama "Mae" diambil dari bahasa Jawa yang berarti "ibu", melambangkan kehangatan 
                  dan kelezatan masakan rumah yang selalu dirindukan. Setiap resep yang kami sajikan 
                  telah melalui proses penelitian dan pengembangan yang panjang untuk memastikan 
                  cita rasa yang sempurna.
                </p>
                <p>
                  Hari ini, Kedai Mae telah menjadi tempat favorit bagi ribuan pelanggan yang 
                  mencari pengalaman kuliner yang tak terlupakan. Kami bangga menjadi bagian 
                  dari perjalanan kuliner Anda.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Kedai Mae Restaurant" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nilai-Nilai Kami</h2>
            <p className="section-subtitle">
              Prinsip yang menjadi fondasi dalam setiap pelayanan kami
            </p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon-container">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Pencapaian Kami</h2>
            <p className="section-subtitle">
              Angka-angka yang membanggakan dari perjalanan kami
            </p>
          </motion.div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Tim Kami</h2>
            <p className="section-subtitle">
              Orang-orang hebat di balik kelezatan setiap hidangan
            </p>
          </motion.div>
          
          <div className="team-grid">
            {teamData.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <p className="team-quote">"{member.quote}"</p>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mission-icon">Visi</div>
              <h3 className="mission-title">Visi Kami</h3>
              <p className="mission-text">
                Menjadi kedai makanan dan minuman terdepan yang menghadirkan cita rasa autentik 
                Indonesia dengan pelayanan terbaik, serta menjadi tempat berkumpul yang nyaman 
                bagi keluarga dan sahabat.
              </p>
            </motion.div>
            
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mission-icon">Misi</div>
              <h3 className="mission-title">Misi Kami</h3>
              <p className="mission-text">
                Menyajikan hidangan berkualitas tinggi dengan bahan-bahan segar, memberikan 
                pelayanan yang ramah dan profesional, serta terus berinovasi untuk memenuhi 
                kepuasan pelanggan dengan harga yang terjangkau.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Bergabunglah dengan Keluarga Kedai Mae</h2>
            <p className="cta-subtitle">
              Rasakan pengalaman kuliner yang tak terlupakan bersama kami
            </p>
            <div className="cta-buttons">
              <a href="/menu" className="btn btn-primary">
                Lihat Menu
              </a>
              <a href="/contact" className="btn btn-secondary">
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;