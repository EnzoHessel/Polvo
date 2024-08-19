import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className="flex gap-6">
      <Card image="/icons/zap.svg" title="Tecnologias atuais (Uber, iFood e Nubank utilizam)" />
      <Card image="/icons/square.svg" title="Escalabilidade (prontO para grandes projetos) " />
      <Card image="/icons/talk.svg" title="Alinhamento (Reuniões frequentes para acompanhamento)" />
      <Card image="/icons/circle.svg" title="UX Designing (Equipe profissional e reconhecida)" />
    </div>
  )
}

export default Services;