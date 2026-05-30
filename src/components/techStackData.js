import { ReactComponent as AwsImg } from "./../assets/images/aws.svg";
import { ReactComponent as PythonImg } from "./../assets/images/python.svg";
import { ReactComponent as PostgreImg } from "./../assets/images/postgresql.svg";
import { ReactComponent as DeepLearningImg } from "./../assets/images/deep-learning.svg";
import { ReactComponent as NLPImg } from "./../assets/images/nlp.svg";
import { ReactComponent as ReactImg } from "./../assets/images/react.svg";
import { ReactComponent as DockerImg } from "./../assets/images/docker.svg";
import { ReactComponent as ElasticSearchImg } from "./../assets/images/elasticsearch.svg";
import { ReactComponent as GitImg } from "./../assets/images/git.svg";
import { ReactComponent as LinuxImg } from "./../assets/images/linux.svg";
import { ReactComponent as KerasImg } from "./../assets/images/keras.svg";
import { ReactComponent as MachineLearningImg } from "./../assets/images/machine-learning.svg";
import { ReactComponent as AirflowImg } from "./../assets/images/airflow.svg";
import { ReactComponent as MySQLImg } from "./../assets/images/mysql.svg";
import { ReactComponent as NumpyImg } from "./../assets/images/numpy.svg";
import { ReactComponent as PandasImg } from "./../assets/images/pandas.svg";
import { ReactComponent as PytorchImg } from "./../assets/images/pytorch.svg";
import { ReactComponent as RImg } from "./../assets/images/r-lang.svg";
import { ReactComponent as SklearnImg } from "./../assets/images/sklearn.svg";
import { ReactComponent as SparkImg } from "./../assets/images/spark.svg";
import { ReactComponent as RustImg } from "./../assets/images/rust.svg";
import { ReactComponent as NodeImg } from "./../assets/images/node.svg";
import { ReactComponent as MongoImg } from "./../assets/images/mongo.svg";
import { ReactComponent as TypescriptImg } from "./../assets/images/typescript.svg";

const ProjectImageData = [
    {
        id: 0,
        img: "https://ik.imagekit.io/kleugnkt/sifu.png?updatedAt=1707103348441",
    },
    {
        id: 1,
        img: "https://ik.imagekit.io/kleugnkt/VideoPlayerUI.png?updatedAt=1709022900974",
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/kleugnkt/KChat%20Design%20Pattern.png?updatedAt=1709023849966"
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/kleugnkt/CovidWorldMap.png?updatedAt=1709653429175"
    }
  ]

  const DataScienceTechStackData = [
    {
      url: "https://kevinleung.tech/work#crypto-trading-company",
      imgComponent: AirflowImg,
      text: "Airflow",
    },
    {
      url: "https://github.com/kleungkt/Machine-Learning",
      imgComponent: DeepLearningImg,
      text: ["Deep", "Learning"],
    },
    {
      url: "https://github.com/kleungkt/Machine-Learning",
      imgComponent: KerasImg,
      text: "Keras",
    },
    {
      url: "https://github.com/kleungkt/Machine-Learning",
      imgComponent: MachineLearningImg,
      text: ["Machine", "Learning"],
    },
    {
      url: "https://github.com/kleungkt/database-systems",
      imgComponent: MongoImg,
      text: "MongoDB",
    },
    {
      url: "https://github.com/kleungkt/database-systems",
      imgComponent: MySQLImg,
      text: "MySQL",
    },
    {
      url: "https://github.com/kleungkt/Natural-Language-Processing",
      imgComponent: NLPImg,
      text: ["Natural", "Language", "Processing"],
    },
    {
      url: "https://kevinleung.tech/work#vico-capital",
      imgComponent: NumpyImg,
      text: "Numpy",
    },
    {
      url: "https://kevinleung.tech/work#vico-capital",
      imgComponent: PandasImg,
      text: "Pandas",
    },
    {
      url: "https://github.com/kleungkt/Machine-Learning",
      imgComponent: PytorchImg,
      text: "Pytorch",
    },
    {
      url: "https://github.com/kleungkt/Regression-Analysis",
      imgComponent: RImg,
      text: "R",
    },
    {
      url: "https://github.com/kleungkt/Machine-Learning",
      imgComponent: SklearnImg,
      text: ["Scikit", "learn"],
    },
    {
      url: "https://kevinleung.tech/work#crypto-trading-company",
      imgComponent: SparkImg,
      text: "Spark",
    },
  ];

  const SoftwareEngineeringTechStackData = [
    {
      url: "https://kevinleung.tech/work#crypto-trading-company",
      imgComponent: AwsImg,
      text: "AWS",
    },
    {
      url: "https://kevinleung.tech",
      imgComponent: DockerImg,
      text: "Docker",
    },
    {
      url: "https://github.com/kleungkt/Software-engineering-covid-project",
      imgComponent: GitImg,
      text: "Git",
    },
    {
      url: "https://kevinleung.tech",
      text: "LangChain",
    },
    {
      url: "https://kevinleung.tech/work#goldman-sachs",
      imgComponent: LinuxImg,
      text: "Linux",
    },
    {
      url: "https://kevinleung.tech",
      text: "LLMs",
    },
    {
      url: "https://github.com/kleungkt/chatdaddy-front",
      imgComponent: NodeImg,
      text: "Node.JS",
    },
    {
      url: "https://kevinleung.tech",
      text: ["OpenAI", "API"],
    },
    {
      url: "https://github.com/kleungkt/Python-Programming",
      imgComponent: PythonImg,
      text: "Python",
    },
    {
      url: "https://github.com/kleungkt/database-systems",
      imgComponent: PostgreImg,
      text: "PostgreSQL",
    },
    {
      url: "https://kevinleung.tech",
      text: "RAG",
    },
    {
      url: "https://github.com/kleungkt/chatdaddy-front",
      imgComponent: ReactImg,
      text: "React",
    },
    {
      url: "https://techplanet.notion.site/Rust-8ab34e98837247f69d29b19d795a4e46?pvs=74",
      imgComponent: RustImg,
      text: "Rust",
    },
    {
      url: "https://kevinleung.tech",
      text: "Transformers",
    },
    {
      url: "https://github.com/kleungkt/chatdaddy-front",
      imgComponent: TypescriptImg,
      text: "Typescript",
    },
  ];

function getTextForSorting(item) {
  if (Array.isArray(item.text)) {
     return item.text.join(' ');
  } else {
     return item.text;
  }
 }
const techStackDataList = [DataScienceTechStackData, SoftwareEngineeringTechStackData]; 
// Sort the array based on the text attribute
techStackDataList.map((techStackData, index) => (
techStackData.sort((a, b) => {
  const textA = getTextForSorting(a);
  const textB = getTextForSorting(b);
  return textA.localeCompare(textB);
  })
));
const TechStackComponent = ({ techStackDataObj }) => {
  return (
     <div>
       {Object.entries(techStackDataObj).map(([title, dataList]) => (
         <div key={title} className="tooling hidden">
           <div className="tooling-title">
             <h2>{title}</h2>
           </div>
           <div className="tooling-box">
             {dataList.map((item, index) => (
              item.url ? (
                  <a href={item.url} className={`box-content box-content-link ${item.imgComponent ? '': 'box-content-maths'}`}>
                     <div className="box-content">
                       {item.imgComponent && (
                         <div className="box-icon">
                           <item.imgComponent className="icon" />
                         </div>
                       )}
                       <div className="box-text">
                         {Array.isArray(item.text) ? (
                           item.text.map((text, i) => <p key={i}>{text}</p>)
                         ) : (
                           <p>{item.text}</p>
                         )}
                       </div>
                     </div>
                  </a>
                 ) : (
                  <a href="" className={`box-content box-content-link ${item.imgComponent ? '': 'box-content-maths'}`}>
                    <div className="box-content">
                      {item.imgComponent && (
                        <div className="box-icon">
                          <item.imgComponent className="icon" />
                        </div>
                      )}
                      <div className="box-text">
                        {Array.isArray(item.text) ? (
                          item.text.map((text, i) => <p key={i}>{text}</p>)
                        ) : (
                          <p>{item.text}</p>
                        )}
                      </div>
                    </div>
                  </a>
                 )
             ))}
           </div>
         </div>
       ))}
     </div>
  );
};

  export {ProjectImageData, DataScienceTechStackData, SoftwareEngineeringTechStackData, TechStackComponent};
