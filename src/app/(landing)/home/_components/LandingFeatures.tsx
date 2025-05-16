"use client";
import { type GradientType } from "@/components/CardIcon";
import { CardWithIcon } from "@/components/CardWithIcon";
import { APP_NAME } from "@/config/config";
import { motion } from "framer-motion";
import { BarChart, Rocket, Zap } from "lucide-react";
import LandingSectionTitle from "./LandingSectionTitle";

export default function LandingFeatures() {
  const features: {
    icon: typeof Rocket;
    title: string;
    description: string;
    gradient: GradientType;
  }[] = [
    {
      icon: Rocket,
      title: "Acceso Rápido",
      description:
        "Sin esperas. Tu decides cuando resolver un caso práctico y obtener la corrección al instante.",
      gradient: "blue",
    },
    // {
    //   icon: Shield,
    //   title: "Secure By Design",
    //   description:
    //     "Enterprise-grade security with end-to-end encryption and regular audits.",
    //   gradient: "green",
    // },
    {
      icon: Zap,
      title: "Impulsado por IA",
      description:
        "Aproveche el poder de la IA para generar supuestos prácticos personalizados al instante.",
      gradient: "amber",
    },
    // {
    //   icon: Users,
    //   title: "Team Collaboration",
    //   description:
    //     "Seamless collaboration tools to help your team work together effectively from anywhere.",
    //   gradient: "purple",
    // },
    // {
    //   icon: Globe,
    //   title: "Global Support",
    //   description:
    //     "24/7 support available worldwide in multiple languages to assist you whenever needed.",
    //   gradient: "indigo",
    // },
    {
      icon: BarChart,
      title: "Seguimiento de Progreso",
      description:
        "Monitorea tu progreso con gráficos y estadísticas personalizadas.",
      gradient: "orange",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <LandingSectionTitle
          title={`Por que elegir ${APP_NAME}`}
          description="Podrás generar supuestos prácticos personalizados al instante. Obtener recomendaciones para tu caso particular y llevar un seguimiento de tu progreso."
        />

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group-md relative"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <CardWithIcon
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                descriptionClassName="text-sm"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
