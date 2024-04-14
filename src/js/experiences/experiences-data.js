import profUrl from '../../img/sertifications/prof.jpg';
import diplomaKnteUrl from '../../img/sertifications/diploma-knteu.jpg';

export const experiencesData = [
  {
    title: 'C++/Python Programmer, Data Analyst',
    company: 'BIT-TEAM comp. | Ukraine, Kyiv',
    period: 'January 2016 - up to now',
    duties: [
      'Development and programming of algorithms for solving navigation problems',
      'Researching algorithms in the MATLAB environment. Exploring algorithms with Python frameworks',
      'Exploring algorithms with Python frameworks',
      'Statistical analysis of large data',
    ],
    isAwards: false,
  },
  {
    title: 'Senior researcher',
    company: 'NTUU KPI, IPSA | Ukraine, Kyiv',
    period: 'November 2005 - November 2015',
    duties: [
      'Scientific research (Applied Mathematics, Numerical Methods of Nonlinear Optimization, Mathematical Modeling)',
      'Programming (C++, MatLab)',
      'Writing tutorials and research reports',
    ],
    isAwards: false,
  },
  {
    title: 'Developer',
    company: 'Software MacKiev comp. | Ukraine, Kyiv',
    period: 'November 2001 - January 2007',
    duties: [
      'Software development in Objective-C',
      'GUI development in RealBasic',
      'Porting software from Windows to macOS',
    ],
    isAwards: false,
  },
  {
    title: 'Senior Lecturer, Associate Professor',
    company: 'KNUTE | Ukraine, Kyiv',
    period: 'September 1997 - October 2005',
    duties: [
      'Lectures and practical classes on Algorithms, Programming Languages, Relational Databases and Information Technologies',
      'Writing tutorials and tests for students',
    ],
    isAwards: true,
    awards: [
      { title: 'Diploma of Associate Professor', imgUrl: profUrl },
      { title: 'Diploma', imgUrl: diplomaKnteUrl },
    ],
  },
  {
    title: 'Scientific Researcher',
    company: 'V.M. Glushkov IC (NAS of Ukraine) | Kyiv',
    period: 'August 1988 - October 1996',
    duties: [
      'Scientific research in the field of Nonlinear Optimization and Variational Inequalities. Dissertation: "Numerical Methods for Solving Variational Inequalities."',
      'Development of software packages for solving problems in Nonlinear Optimization and Variational Inequalities',
    ],
    isAwards: false,
  },
];
