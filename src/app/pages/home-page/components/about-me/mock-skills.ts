import { Skill } from '../../../../models/skill';

// IMPORTANT !!!!!

// from skill level ( DEDUCT 15 ), example, if your skill level is 60% then 60 - 15 = 45%, 
// This is because of CSS style.
export const SKILLS: Skill[] = [
  // {
  //   name: 'html',
  //   skillLevel: 55,
  //   missingSkills: 30
  // },
  // {
  //   name: 'css',
  //   skillLevel: 50,
  //   missingSkills: 35
  // },
  {
    name: 'php',
    skillLevel: 70,
    missingSkills: 15
  },
  {
    name: 'javaScript',
    skillLevel: 60,
    missingSkills: 25
  },
  {
    name: 'mysql',
    skillLevel: 70,
    missingSkills: 15
  },
  {
    name: 'mongo db',
    skillLevel: 30,
    missingSkills: 55
  },
  {
    name: 'node js',
    skillLevel: 30,
    missingSkills: 55
  },
  {
    name: 'laravel',
    skillLevel: 70,
    missingSkills: 15
  },
  {
    name: 'lumen',
    skillLevel: 70,
    missingSkills: 15
  },
  {
    name: 'react',
    skillLevel: 65,
    missingSkills: 20
  },
  {
    name: 'angular',
    skillLevel: 50,
    missingSkills: 35
  },
  {
    name: 'vue',
    skillLevel: 55,
    missingSkills: 30
  }
];