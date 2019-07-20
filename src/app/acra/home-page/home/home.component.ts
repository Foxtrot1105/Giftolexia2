import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  viewNumber: any[] = [265, 120];
  revenueNumber: any[] = [
    {
      name: 'Revenue',
      value: 13440
    }
  ];

  subscribersNumber: any[] = [
    {
      name: 'Subscribers',
      value: 440
    }
  ];

  categoriesNumber: any[] = [
    {
      name: 'Categories',
      value: 3
    }
  ];

  apiNumber: any[] = [
    {
      name: 'Report',
      value: 100
    }
  ];

  colorSchemeNumber1 = {
    domain: ['#2196f3']
  };

  colorSchemeNumber2 = {
    domain: ['#ffc721']
  };

  colorSchemeNumber3 = {
    domain: ['#d066e2']
  };

  colorSchemeNumber4 = {
    domain: ['#ff6b68']
  };

  single: any = [
    {
      name: '2014',
      value: 5
    },
    {
      name: '2015',
      value: 10
    },
    {
      name: '2016',
      value: 8
    }
  ];

  view: any[] = [250, 400];

  colorScheme = {
    domain: ['#2E77BB', '#00BCD4', '#2196f3']
  };

  // line, area
  autoScale = true;

  // pie
  colorSchemePie = {
    domain: ['#F26936', '#35ABAF', '#F26936']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  piesingle = [
    {
      name: 'Singpass',
      value: 8940000
    },
    {
      name: 'Corppass',
      value: 5000000
    }
  ];

  piemulti = [
    {
      name: 'Singpass',
      series: [
        {
          name: '2010',
          value: 7300000
        },
        {
          name: '2011',
          value: 8940000
        }
      ]
    },

    {
      name: 'Corppass',
      series: [
        {
          name: '2010',
          value: 7870000
        },
        {
          name: '2011',
          value: 8270000
        }
      ]
    }
  ];

  colorSchemeBar = {
    domain: ['#3BABFD', '#6DC1FF', '#B2DDFF']
  };
  pieView: any[] = [400, 300];

  //bar chart

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'API Management';
  showYAxisLabel = true;
  yAxisLabel = 'Usage';

  barsingle = [
    {
      name: 'Category',
      value: 894
    },
    {
      name: 'Package',
      value: 500
    },
    {
      name: 'General',
      value: 720
    }
  ];

  barmulti = [
    {
      name: 'Category Management',
      series: [
        {
          name: '2019',
          value: 730
        },
        {
          name: '2020',
          value: 894
        }
      ]
    },

    {
      name: 'Package Management',
      series: [
        {
          name: '2019',
          value: 787
        },
        {
          name: '2020',
          value: 827
        }
      ]
    },

    {
      name: 'General Management',
      series: [
        {
          name: '2019',
          value: 500
        },
        {
          name: '2020',
          value: 580
        }
      ]
    }
  ];

  colorSchemeGauge = {
    domain: ['#EC1146', '#F7E565', '#35ABAF']
  };
  //gauage chart
  gaugesingle = [
    {
      name: 'WIS Reports',
      value: 89
    },
    {
      name: 'FD Reports',
      value: 50
    },
    {
      name: 'Customer Reports',
      value: 72
    }
  ];

  colorSchemeLine = {
    domain: ['#39bbb0', '#673AB7', '#2196f3']
  };
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false
      // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: 40 - 5,
            max: 84 + 5
          }
        }
      ]
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgb(214, 177, 90)',
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false
      // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: 1 - 5,
            max: 34 + 5
          }
        }
      ]
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    {
      // grey
      backgroundColor: 'rgb(90, 138, 214)',
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';

  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false
      // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';

  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16'
  ];
  public barChart1Options: any = {
    tooltips: {
      enabled: false
      // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: false,
          barPercentage: 0.6
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false
          }
          // ticks: {
          //   callback: function(value: any) {
          //     return value.charAt(0);
          //   }
          // }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 300,
            stepSize: Math.ceil(500 / 5),
            max: 500
          }
        }
      ]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    legend: {
      display: true
    }
  };
  public mainChartColours: Array<any> = [
    {
      // brandInfo
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
      pointHoverBackgroundColor: '#fff'
    },
    {
      // brandSuccess
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    },
    {
      // brandDanger
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  constructor(public snackBar: MatSnackBar) {}

  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.snackBar.open('Welcome', 'Singmelody', {
      duration: 2000
    });
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }
}
