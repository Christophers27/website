"use client";

import React from 'react'
import { useSectionInView } from '@/hooks/useSectionInView';

export default function ExperienceSection() {
  const { ref } = useSectionInView("experience")

  return (
    <div className='h-screen' id="experience" ref={ref}>ExperienceSection</div>
  )
}
