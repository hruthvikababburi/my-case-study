import { useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';

import 'reactflow/dist/style.css';

//PlaceholderData for Statistics
const placeholderData = {
  CaseStudy:{
    description:'Business Case-Study'
  },
  MarketResearch: {
    description: "Gather information about the market, customers, and competitors.",
    statistics: {
      marketSurveys: 50,
      customerDemographics: "Young professionals, aged 25-40",
      competitorAnalysis: "Completed",
      marketTrends: ["Electric vehicles gaining popularity", "Increasing demand for SUVs"]
    }
  },
  Planning: {
    description: "Create a detailed plan for the car manufacturing project.",
    statistics: {
      projectTimeline: { startDate: "2024-04-01", endDate: "2024-06-30" },
      budgetAllocation: "$10,000,000",
      resourceAllocation: { teamMembers: 20, departments: ["Engineering", "Production", "Marketing"] },
      riskAssessment: "Low risk"
    }
  },
  Designing: {
    description: "Develop the concept and design of the new vehicle.",
    statistics: {
      designIterations: 5,
      conceptSketches: 20,
      prototypeProgress: "70% complete",
      designFeedback: "Positive feedback from stakeholders"
    }
  },
  Manufacturing: {
    description: "Start the production of the new vehicle.",
    statistics: {
      productionTimeline: { startDate: "2024-07-01", endDate: "2024-12-31" },
      unitsProduced: 1000,
      qualityControl: "Stringent quality control measures implemented",
      productionEfficiency: "High efficiency"
    }
  },
  Sales: {
    description: "Initiate sales and marketing efforts for the new vehicle.",
    statistics: {
      salesTargets: "$50,000,000",
      marketingStrategies: ["Online advertising", "Social media campaigns"],
      unitsSold: 500,
      revenueGenerated: "$25,000,000"
    }
  },
  External: {
    description: "Coordinate with external stakeholders such as suppliers and partners.",
    statistics: {
      supplierEngagement: "Active",
      partnershipAgreements: 3,
      vendorPerformance: "Satisfactory"
    }
  },
  Internal: {
    description: "Manage internal operations and processes within the organization.",
    statistics: {
      departmentalCoordination: "Efficient",
      employeeProductivity: "High",
      processImprovements: "Ongoing"
    }
  },
  PRD: {
    description: "Develop the Product Requirements Document (PRD) outlining the features and specifications of the new vehicle.",
    statistics: {
      documentStatus: "Draft",
      reviewIterations: 2,
      stakeholderApproval: "Pending"
    }
  },
  Specs: {
    description: "Define the technical specifications and requirements for the new vehicle.",
    statistics: {
      technicalSpecifications: ["Engine: V8, 500hp", "Transmission: 8-speed automatic", "Safety Features: ABS, airbags"],
      complianceStandards: ["Emission standards: Euro 6", "Safety regulations: NHTSA, IIHS"]
    }
  },
  Hardware: {
    description: "Procure hardware components required for the manufacturing process.",
    statistics: {
      componentOrders: 50,
      supplierContracts: ["Supplier A", "Supplier B"],
      deliveryStatus: "On schedule"
    }
  },
  Software: {
    description: "Develop software systems for vehicle control, diagnostics, and entertainment.",
    statistics: {
      softwareModules: ["Vehicle Control System", "Diagnostic Software", "Infotainment System"],
      developmentProgress: "50% complete",
      testingStatus: "In progress"
    }
  },
  Material: {
    description: "Source and manage raw materials for vehicle production.",
    statistics: {
      materialTypes: ["Steel", "Aluminum", "Plastic"],
      inventoryLevels: { steel: 1000, aluminum: 800, plastic: 1200 },
      supplierPerformance: "Stable"
    }
  },
  Production: {
    description: "Oversee the manufacturing process and ensure timely production.",
    statistics: {
      productionSchedule: "On track",
      assemblyLineEfficiency: "Optimized",
      defectRate: "Below 1%"
    }
  },
  OnlineMarketing: {
    description: "Establish an online presence for the new vehicle through websites and digital platforms.",
    statistics: {
      websiteVisitors: 10000,
      socialMediaFollowers: { facebook: 5000, twitter: 3000, instagram: 2000 },
      onlineCampaigns: ["Launch event", "Promotional offers"]
    }
  },
  Dealership: {
    description: "Collaborate with dealerships to promote and distribute the new vehicle.",
    statistics: {
      dealershipNetwork: 50,
      salesTrainingSessions: 10,
      inventoryManagement: "Efficient"
    }
  },
  B2C: {
    description: "Direct sales to end consumers through online channels.",
    statistics: {
      onlineSales: 500,
      customerFeedback: "Positive",
      returnRate: "Below 2%"
    }
  },
  B2B: {
    description: "Sales to businesses and corporate clients.",
    statistics: {
      corporateClients: 20,
      bulkOrders: 50,
      businessPartnerships: ["Company A", "Company B"]
    }
  },
  Online: {
    description: "Expand online presence and e-commerce capabilities.",
    statistics: {
      websiteTraffic: 20000,
      onlineOrders: 1000,
      conversionRate: "5%",
      customerRetention: "High"
    }
  },
  Interview: {
    description: "Conduct interviews with industry experts and stakeholders.",
    statistics: {
      interviewsScheduled: 10,
      keyInsights: ["Market trends", "Consumer preferences"],
      expertOpinions: "Positive"
    }
  },
  PublicData: {
    description: "Gather publicly available data related to automotive industry trends.",
    statistics: {
      dataSources: ["Government reports", "Industry publications"],
      dataAnalysis: "In progress",
      insightsGenerated: 20
    }
  },
  Health: {
    description: "Monitor health and safety standards during production.",
    statistics: {
      safetyIncidents: 0,
      complianceAudits: "Passed",
      employeeWellnessPrograms: ["Fitness classes", "Mental health support"]
    }
  }


}

//Nodes
const nodes = [
  {
    id:'0',
    position:{x:80, y:380},
    data:{label:'Case-Study',details:placeholderData.CaseStudy},
    targetPosition:'right',
    sourcePosition:'right'
  },

  { 
    id:'1',
    position:{x:450, y:180},
    data:{label:'Research',details:placeholderData.MarketResearch},
    targetPosition:'left',
    sourcePosition:'right'

  },
  {
    id:'2',
    position:{x:450, y:280},
    data:{label:'Planning',details:placeholderData.Planning},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'3',
    position:{x:450, y:380},
    data:{label:'Designing',details:placeholderData.Designing},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'4',
    position:{x:450, y:480},
    data:{label:'Manufacturing',details:placeholderData.Manufacturing},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'5',
    position:{x:450, y:580},
    data:{label:'Sales/Marketing',details:placeholderData.Sales},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'6',
    position:{x:700, y:150},
    data:{label:'External',details:placeholderData.External},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'7',
    position:{x:700, y:200},
    data:{label:'Internal',details:placeholderData.Internal},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'8',
    position:{x:700, y:250},
    data:{label:'PRD',details:placeholderData.PRD},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'9',
    position:{x:700, y:300},
    data:{label:'Specs',details:placeholderData.Specs},
    targetPosition:'left',
    sourcePosition:'right'
  },
  {
    id:'10',
    position:{x:700, y:350},
    data:{label:'Hardware',details:placeholderData.Hardware},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'11',
    position:{x:700, y:400},
    data:{label:'Software',details:placeholderData.Software},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'12',
    position:{x:700, y:450},
    data:{label:'Material',details:placeholderData.Material},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'13',
    position:{x:700, y:500},
    data:{label:'Production',details:placeholderData.Production},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'14',
    position:{x:700, y:550},
    data:{label:'Online',details:placeholderData.OnlineMarketing},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'15',
    position:{x:700, y:600},
    data:{label:'Dealership',details:placeholderData.Dealership},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'16',
    position:{x:950, y:120},
    data:{label:'B2C',details:placeholderData.B2C},
    targetPosition:'left',
    sourcePosition:'right'
  },{
    id:'17',
    position:{x:950, y:170},
    data:{label:'B2B',details:placeholderData.B2B},
    targetPosition:'left',
    sourcePosition:'right'
    
  },{
    id:'18',
    position:{x:1200, y:80},
    data:{label:'Online',details:placeholderData.Online},
    targetPosition:'left',
    sourcePosition:'left'
  },{
    id:'19',
    position:{x:1200, y:130},
    data:{label:'Interview',details:placeholderData.Interview},
    targetPosition:'left',
    sourcePosition:'left'
  },{
    id:'20',
    position:{x:1200, y:180},
    data:{label:'Public Data',details:placeholderData.PublicData},
    targetPosition:'left',
    sourcePosition:'left'
  },{
    id:'21',
    position:{x:1200, y:230},
    data:{label:'Health',details:placeholderData.Health},
    targetPosition:'left',
    sourcePosition:'left'
  }
  
]

//Edges
const edges = [
  
  { id: '0-1', source: '0', target: '1', type: 'step', arrowHeadType: 'arrow'},
  { id: '0-2', source: '0', target: '2', type: 'step', arrowHeadType: 'arrow'},
  { id: '0-3', source: '0', target: '3', type: 'step', arrowHeadType: 'arrow'},
  { id: '0-4', source: '0', target: '4', type: 'step', arrowHeadType: 'arrow'},
  { id: '0-5', source: '0', target: '5', type: 'step', arrowHeadType: 'arrow'},

  { id: '1-6', source: '1', target: '6', type: 'step', arrowHeadType: 'arrow'},
  { id: '1-7', source: '1', target: '7', type: 'step', arrowHeadType: 'arrow'},
  { id: '2-8', source: '2', target: '8', type: 'step', arrowHeadType: 'arrow'},
  { id: '2-9', source: '2', target: '9', type: 'step', arrowHeadType: 'arrow'},
  { id: '3-10', source: '3', target: '10', type: 'step', arrowHeadType: 'arrow'},
  { id: '3-11', source: '3', target: '11', type: 'step', arrowHeadType: 'arrow'},
  { id: '4-12', source: '4', target: '12', type: 'step', arrowHeadType: 'arrow'},
  { id: '4-13', source: '4', target: '13', type: 'step', arrowHeadType: 'arrow'},
  { id: '5-14', source: '5', target: '14', type: 'step', arrowHeadType: 'arrow'},
  { id: '5-15', source: '5', target: '15', type: 'step', arrowHeadType: 'arrow'},
  { id: '6-16', source: '6', target: '16', type: 'step', arrowHeadType: 'arrow'},
  { id: '6-17', source: '6', target: '17', type: 'step', arrowHeadType: 'arrow'},
  { id: '16-18', source: '16', target: '18', type: 'step', arrowHeadType: 'arrow'},
  { id: '16-19', source: '16', target: '19', type: 'step', arrowHeadType: 'arrow'},
  { id: '16-20', source: '16', target: '20', type: 'step', arrowHeadType: 'arrow'},
  { id: '16-21', source: '16', target: '21', type: 'step', arrowHeadType: 'arrow'},

];



export default function Flow() {
  const [showTooltip,setShowTooltip] = useState(false)
  const [tooltipData, setTooltipData] = useState({x:0,y:0,content:''})

  const handleNodeMouseEnter=(event,node)=>{
    const {clientX,clientY} = event
    setTooltipData({x:clientX + 10,y:clientY + 10,content:node.data.details})
    setShowTooltip(true)
  }

  const handleNodeMouseLeave=()=>{
    setShowTooltip(false)
  }


  return(
    <div className='flow-cont' style={{ position: 'relative'}}>
      
      <ReactFlow nodes={nodes} edges={edges}  onNodeMouseEnter={handleNodeMouseEnter} onNodeMouseLeave={handleNodeMouseLeave}> 
        <Background variant='lines'/>
        <Controls/>
        <MiniMap/>
        <div
          style={{
            position: 'absolute',
            top: '50px', // Adjust as needed
            left: '50px', // Adjust as needed
            width: '300px',
            padding: '10px',
            border: '1px solid #ddd',
            backgroundColor: '#f9f9f9',
            zIndex: 10,
          }}
        >
          <h2 style={{ margin: 0, textAlign: 'center' }}>Car Manufacturing Project Phases</h2>
        </div>
      </ReactFlow>
      {
        showTooltip && (
          <div style={{left: tooltipData.x, top: tooltipData.y, position: 'absolute', backgroundColor: '#ebe6dc', padding: '8px', border: '1px solid black', borderRadius: '4px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', zIndex: 9999}}>
            {tooltipData.content.statistics ? 
            (
              <>
                <p>Description: {tooltipData.content.description}</p>
                <h4>Statistics:</h4>
                <ul>
                  {Object.entries(tooltipData.content.statistics).map(([key, value]) => (
                    <li key={key}>
                      {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
                    </li>
                  ))}
                </ul>
             </>
            )
          :
          <h3>{tooltipData.content.description}</h3>
          }
          </div> 
        )
      }
    </div>
    
  )
}

