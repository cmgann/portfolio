import { Component, OnInit } from '@angular/core';

class Experience {
  public Logo: string;
  public CompanyName: string;
  public Title: string;
  public Dates: string;
  public Items: JobDescription[];
  public constructor(
    Logo: string,
    CompanyName: string,
    Title: string,
    Dates: string,
    Items: JobDescription[]
  ) {
    this.Logo = Logo;
    this.CompanyName = CompanyName;
    this.Title = Title;
    this.Dates = Dates;
    this.Items = Items;
  }
}

class JobDescription {
  public Description;
  public constructor(Description: string) {
    this.Description = Description;
  }
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Jobs: Experience[] = [
    {
      Logo: 'assets/images/tylerlogo.png',
      CompanyName: 'Tyler Technologies',
      Title: 'Support Analyst',
      Dates: '05/2017 to Present',
      Items: [
        {
          Description:
            'Makes outbound phone, web (CRM) or email software support to resolve complex, escalated and/or high priority client inquiries and technical problems effectively and efficiently. ',
        },
        {
          Description:
            'Contributes to web application automation using Leapwork and Selenium and custom forms.',
        },
        {
          Description: 'Contributes to company knowledge library.',
        },
        {
          Description:
            'Update and maintain client configuration using T-SQL in SSMS and other custom tools.',
        },
        {
          Description:
            'Contributes to web application for client and end user guidance using WalkMe',
        },
        {
          Description: 'Provides guidance and mentorship to team members.',
        },
        {
          Description:
            'Builds custom SQL scripts and programs using C#/Python/AHK to assist team members and other departments with triaging issues and building tools for work efficiency.',
        },
        {
          Description:
            'Develops and builds custom solutions based off of customer’s needs.',
        },
        {
          Description:
            'Works closely with other departments to assist with complicated solutions and problems.',
        },
        {
          Description: 'Manages JIRA, Confluence and CRM',
        },
        {
          Description: 'Performs JIRA Scrum Master duties.',
        },
      ],
    },

    {
      Logo: 'assets/images/ese.png',
      CompanyName: 'Elliot Electric Supply',
      Title: 'Operations Manager',
      Dates: '05/2016 to 05/2017',
      Items: [
        {
          Description:
            'Developed and reviewed existing policies and procedures.',
        },
        {
          Description:
            'Monitored and inspected project teams’ job progress to ensure compliance with all quality, and safety requirements.',
        },
        {
          Description: 'Audit and inspect subcontractor facilities.',
        },
      ],
    },

    {
      Logo: 'assets/images/bestbuy.png',
      CompanyName: 'Best Buy',
      Title: 'Sales Associate',
      Dates: '07/2012 to 08/2016',
      Items: [
        {
          Description:
            'Monitor fulfillment of purchase contract terms to ensure that they are handled in a timelymanner.',
        },
        {
          Description:
            'Examine merchandise to ensure that it is correctly priced and displayed and that it functions.',
        },
      ],
    },

    {
      Logo: 'assets/images/usmc.png',
      CompanyName: 'United States Marine Corps',
      Title: 'Quality Assurance',
      Dates: '05/2008 to 06/2015',
      Items: [
        {
          Description:
            'Monitor performance of quality control systems to ensure effectiveness and efficiency.',
        },
        {
          Description:
            'Oversee workers including supervisors, inspectors, or workers engaged in activities.',
        },
        {
          Description:
            'Review quality documentation necessary for regulatory submissions and inspections.',
        },
      ],
    },
  ];
}
