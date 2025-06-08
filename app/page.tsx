"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Trophy,
  DollarSign,
  Users,
  Star
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function EventsPage() {
  // Event data from the provided content
  const events = [
    {
      id: 1,
      title: "Jokes on You Again",
      description: "A thrilling comedy show by Bangalore's very own Niroop Mohan, Join us for an show of laughter and entertainment as Niroop takes the stage to share his unique perspective on life, love, and everything in between.",
      date: "May 10th, 2025",
      time: "10:00 AM",
      location: "Auditorium 1, Ground Floor, PJA Block, BMSCE",
      category: "Utsav 2025",
      status: "registration-open",
      registrationFee: "₹150 per person",
      prizePool: "N/A",
      team: "Individual Participation",
      coordinators: [
        { name: "R Suman", number: "+91 " },
        { name: "Likith Chowdary", number: "+91 " }
      ],
      registrationLink: "https://events.bmsutsav.in/events/GRDJOY",
      poster: "https://gradient-content-server.vercel.app/content/utsav25/JOY.png"
    },
    {
      id: 2,
      title: "Uncharted 3 : Lost Voyage",
      description: "A thrilling high stakes online treasure hunt where participants embark on a quest to uncover hidden treasures and solve intricate puzzles. With a mix of technology and adventure, this event promises excitement and challenges.",
      date: "May 9th, 2025",
      time: "10:00 AM",
      location: "MEL Lab 1 & 2, 7th Floor, PJA Block, BMSCE",
      category: "Utsav 2025",
      status: "registration-open",
      registrationFee: "₹100 per team",
      prizePool: "₹5,000",
      team: "2 in a team",
      coordinators: [
        { name: "Pranav Veeraghanta", number: "+91 " },
        { name: "Siddarth Sahay", number: "+91 " }
      ],
      registrationLink: "https://events.bmsutsav.in/events/GRDULV",
      poster: "https://gradient-content-server.vercel.app/content/utsav25/UNC.png"
    },
    {
      id: 3,
      title: "Sync or Sink",
      description: "A test of teamwork and strategy, where participants must work together to solve puzzles and challenges. You either Sync up with your teammates or Sink into the depths of despair.",
      date: "May 10th, 2025",
      time: "2:30 PM",
      location: "CSE Seminar Hall, 4th Floor, PJA Block, BMSCE",
      category: "Utsav 2025",
      status: "registration-open",
      registrationFee: "₹100 per team",
      prizePool: "₹4,000",
      team: "2 in a team",
      coordinators: [
        { name: "Yashas Nandan", number: "+91 " },
        { name: "Vignesh Madan", number: "+91 " }
      ],
      registrationLink: "https://events.bmsutsav.in/events/GRDSOS",
      poster: "https://gradient-content-server.vercel.app/content/utsav25/SOS.png"
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden text-white relative">
      {/* Background Video - Reduced opacity to see more of the background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: "brightness(0.5)", mixBlendMode: "normal" }}
        >
          <source
            src="https://gradient-content-server.vercel.app/content/utsav25/bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Mesh grid overlay for depth - reduced opacity further */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Dark gradient overlay - significantly reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-purple-950/25 to-black/25" />
      </div>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
        
        .righteous-regular {
          font-family: "Righteous", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        
        .bree-serif-regular {
          font-family: "Bree Serif", serif;
          font-weight: 400;
          font-style: normal;
        }
        
        .event-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Event poster container */
        .event-poster-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1/1; /* Creates a perfect square */
        }

        .event-poster-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Larger card sizing */
        .event-card {
          width: 450px;
          height: auto;
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .event-card-content {
          flex: 1;
          overflow-y: visible;
          display: flex;
          flex-direction: column;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .event-card {
            width: 90%;
            max-width: 450px;
          }
        }
        
        /* Enhancing text readability */
        .event-description {
          font-size: 1.05rem;
          line-height: 1.6;
        }
        
        .event-detail {
          font-size: 1.05rem;
        }
      `}</style>

      <Navbar />

      {/* Main content - Added more padding top to show more background */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
        {/* Header - Increased title sizes */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 mt-8"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-extrabold righteous-regular mb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-yellow-200 to-pink-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="block md:inline">Gradient</span>
            <span className="block md:inline"> X</span>
            <span className="block md:inline"> Utsav</span>
          </motion.h1>



          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Get ready for an extraordinary showcase of talent, creativity, and innovation!
          </motion.p>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 relative px-2"
        >
          {/* Events List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-12 pb-12"
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="bg-purple-950/70 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-700/30 transition-all duration-300 transform hover:-translate-y-2 event-card snap-center"
              >
                <div className="h-full flex flex-col">
                  {/* Top - Image (perfect square aspect ratio) */}
                  <div className="w-full">
                    <div className="relative event-poster-container">
                      <img
                        src={event.poster}
                        alt={event.title}
                        className="event-poster-image transition-transform duration-700 hover:scale-110"
                      />

                      {/* Event status badge */}
                      <div className="absolute top-6 left-6 z-10">
                        {event.status === "registration-open" && (
                          <span className="px-4 py-2 text-base font-medium bg-purple-600 text-white rounded-full border border-purple-400/30 shadow-md">
                            Registration Open
                          </span>
                        )}
                        {event.status === "coming-soon" && (
                          <span className="px-4 py-2 text-base font-medium bg-blue-600 text-white rounded-full border border-blue-400/30 shadow-md">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom - Content */}
                  <div className="p-8 flex flex-col flex-1 event-card-content">
                    <div className="flex items-center gap-3 mb-4">
                      <Star size={24} className="text-yellow-400" fill="#FBBF24" />
                      <span className="text-yellow-200 text-xl font-medium">{event.category}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 hover:text-purple-300 transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-purple-100 mb-6 text-base event-description">
                      {event.description}
                    </p>

                    {/* Event details - Responsive grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex items-center gap-3">
                        <Calendar size={22} className="text-purple-400 flex-shrink-0" />
                        <span className="text-purple-200 event-detail">{event.date}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock size={22} className="text-purple-400 flex-shrink-0" />
                        <span className="text-purple-200 event-detail">{event.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <MapPin size={22} className="text-purple-400 flex-shrink-0" />
                      <span className="text-purple-200 event-detail">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <Users size={22} className="text-purple-400 flex-shrink-0" />
                      <span className="text-purple-200 event-detail">{event.team}</span>
                    </div>

                    {/* Registration fee and prize pool */}
                    <div className="grid grid-cols-1 gap-5 mb-6">
                      <div className="flex items-center gap-4 bg-purple-800/50 p-4 rounded-lg border-l-3 border-purple-500">
                        <DollarSign className="text-purple-300 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="text-purple-300 text-base font-medium">Registration Fee</h4>
                          <p className="text-white text-lg font-bold">{event.registrationFee}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-purple-800/50 p-4 rounded-lg border-l-3 border-yellow-500">
                        <Trophy className="text-yellow-400 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="text-yellow-300 text-base font-medium">Prize Pool</h4>
                          <p className="text-white text-lg font-bold">{event.prizePool}</p>
                        </div>
                      </div>
                    </div>

                    {/* Coordinators */}
                    <div className="bg-purple-900/40 p-5 rounded-xl mb-8">
                      <h4 className="text-lg font-bold text-white mb-4">Event Coordinators</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {event.coordinators.map((coordinator, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Phone className="text-purple-400 flex-shrink-0" size={20} />
                            <div>
                              <p className="text-white text-lg">{coordinator.name}</p>
                              <p className="text-purple-300 text-base">{coordinator.number}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Registration button */}
                    <div className="mt-auto">
                      <motion.a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md font-medium text-lg w-full"
                      >
                        <span>Register Now</span>
                        <ArrowRight size={22} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}