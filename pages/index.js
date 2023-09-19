import Header from "../components/organisms/header";
import Footer from "../modules/footer";
import Banner from "../modules/banner";
import Process from "../modules/process";
import Portfolio from "../modules/portfolio";
import Services from "../modules/services";
import Testimonial from "../modules/testimonial"
import Inspiration from "../modules/inspiration";
import Enquiry from "../modules/enquery";
import FAQs from "../modules/faqs";
import TechStack from "../modules/tech-stack";

export async function getStaticProps() {
  // fetch data and pass it as props
  // const data =  awaitfetch('http://127.0.0.1:8000/stepProcess/list').then(res => res.json());

  const data = {
    stepProcess: [
      {
        "id": 1,
        "icon": "/storage/uploads/stepProcesses_icons/1694323593_Capture.PNG",
        "name": "Process 001",
        "description": "Process Description 001",
        "status": 0,
        "created_at": "2023-09-10T05:26:33.000000Z",
        "updated_at": "2023-09-10T06:15:43.000000Z"
      },
      {
        "id": 3,
        "icon": "/storage/uploads/stepProcesses_icons/1694327052_Capture.PNG",
        "name": "Process 0013",
        "description": "Process Description 003",
        "status": 0,
        "created_at": "2023-09-10T06:24:12.000000Z",
        "updated_at": "2023-09-10T06:24:12.000000Z"
      }
    ],
    serviceList: [
      {
        "id": 1,
        "icon": "/storage/uploads/services_icons/1694010082_1.png",
        "name": "Test Name 001",
        "description": "Test Description 1",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-06T14:21:22.000000Z",
        "updated_at": "2023-09-10T05:14:30.000000Z"
      },
      {
        "id": 2,
        "icon": "/storage/uploads/services_icons/1694010082_1.png",
        "name": "Test Name 002",
        "description": "Test Description 2",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-06T14:21:22.000000Z",
        "updated_at": "2023-09-10T05:14:30.000000Z"
      }
    ],
    technologies: [
      {
        "id": 1,
        "icon": "/storage/uploads/technologies_icons/1694135314_1.png",
        "name": "Name 0011",
        "category": "category 1",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-08T01:08:35.000000Z",
        "updated_at": "2023-09-08T10:13:07.000000Z"
      },
      {
        "id": 2,
        "icon": "/storage/uploads/technologies_icons/1694135314_1.png",
        "name": "Name 0022",
        "category": "category 2",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-08T01:08:35.000000Z",
        "updated_at": "2023-09-08T10:13:07.000000Z"
      }
    ],
    portfolios: [
      {
        "id": 2,
        "service_type": "Web Dev 01",
        "icon": "/storage/uploads/portfolios_icons/1694328862_Capture.PNG",
        "name": "Wynk Music App 001",
        "description": "Portfolio Description",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-10T06:54:22.000000Z",
        "updated_at": "2023-09-10T06:54:22.000000Z"
      },
      {
        "id": 3,
        "service_type": "Web Dev 02",
        "icon": "/storage/uploads/portfolios_icons/1694328993_Capture.PNG",
        "name": "Wynk Music App 002",
        "description": "Portfolio Description 002",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-10T06:56:33.000000Z",
        "updated_at": "2023-09-10T06:56:33.000000Z"
      }
    ],
    testimonials: [
      {
        "id": 1,
        "client_pic": "/storage/uploads/testimonials_client_pics/1694141744_1.png",
        "name": "Client Name 01",
        "origination_name": "Origination Name 01",
        "service_name": "Service 01",
        "rating": 4,
        "description": "Testimonial Description 01",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-08T02:55:44.000000Z",
        "updated_at": "2023-09-08T02:57:03.000000Z"
      },
      {
        "id": 2,
        "client_pic": "/storage/uploads/testimonials_client_pics/1694141744_1.png",
        "name": "Client Name 02",
        "origination_name": "Origination Name 02",
        "service_name": "Service 02",
        "rating": 4,
        "description": "Testimonial Description 02",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-08T02:55:44.000000Z",
        "updated_at": "2023-09-08T02:57:03.000000Z"
      }
    ],
    teamList: [
      {
        "id": 1,
        "pic": "/storage/uploads/teams_pics/1694142906_1.png",
        "name": "Name 01",
        "designation_name": "Designation 01",
        "quotation": "Quotation 01",
        "description": "Description 01",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-08T03:15:06.000000Z",
        "updated_at": "2023-09-08T03:15:50.000000Z"
      },
      {
        "id": 2,
        "pic": "/storage/uploads/teams_pics/1694142906_1.png",
        "name": "Name 02",
        "designation_name": "Designation 02",
        "quotation": "Quotation 02",
        "description": "Description 02",
        "status": 0,
        "deleted_at": null,
        "created_at": "2023-09-08T03:15:06.000000Z",
        "updated_at": "2023-09-08T03:15:50.000000Z"
      }
    ],
    faqs: [
      {
        "id": 1,
        "question": "Question 001 ?",
        "answer": "Answer 001",
        "status": 0,
        "created_at": "2023-09-10T03:29:26.000000Z",
        "updated_at": "2023-09-10T03:30:10.000000Z"
      },
      {
        "id": 2,
        "question": "Question 002 ?",
        "answer": "Answer 002",
        "status": 0,
        "created_at": "2023-09-10T03:29:26.000000Z",
        "updated_at": "2023-09-10T03:30:10.000000Z"
      }
    ],
    contactDetails: {
      "id": 1,
      "address": "address 2",
      "contact": "9999999992",
      "instagram": "instagram.com/1",
      "facebook": "facebook.com/1",
      "twitter": "twitter.com/1",
      "youtube": "youtube.com/1",
      "website": "website.com/1",
      "linkedin": "linkedin.com/1",
      "status": 0,
      "deleted_at": null,
      "created_at": "2023-09-08T08:41:40.000000Z",
      "updated_at": "2023-09-10T04:35:33.000000Z"
    }
  }
  return { props: data };
}


const App = () => {
  return (
    <div>
      <div>
        {/* <Header /> */}
      </div>
      <div id="main" className="overflow-hidden">
        <div className="mb-10">
          <Header />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Process />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <TechStack />
        </div>
        <div>
          <Testimonial />
        </div>
        <div>
          <Inspiration />
        </div>
        <div>
          <Enquiry />
        </div>
        <div>
          <FAQs />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default App;