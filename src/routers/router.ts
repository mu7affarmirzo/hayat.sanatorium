import booked from "views/booked/booked";
import addMedicalHistory from "views/booked/addMedicalHistory";
import dispatching from "views/dispatching";
import events from "views/events";
import patients from "views/patients";
import accounts from "views/patients/accounts";
import searchPatient from "views/patients/searchPatient";
import doctorOnDuty from "views/patients/doctorOnDuty";
import nurseOnDuty from "views/patients/nurseOnDuty";
import contactAndAccount from "views/patients/contactAndAccount";

const ROUTES = {
  dashboard: [
    {
      name: "booked",
      defaultPath: "booked",
      paths: [
        {
          path: "booked",
          element: booked,
        },
        {
          path: "organ-affairs",
          element: addMedicalHistory,
        },
      ],
    },
    {
      name: "patients",
      defaultPath: "patients",
      paths: [
        {
          path: "doctor-duty",
          element: doctorOnDuty,
        },
        {
          path: "nurse-duty",
          element: nurseOnDuty,
        },
        {
          path: "patients",
          element: patients,
        },
        {
          path: "accounts",
          element: accounts,
        },
        {
          path: "contact-account",
          element: contactAndAccount,
        },
        {
          path: "search-patients",
          element: searchPatient,
        },
      ],
    },
    {
      name: "events",
      defaultPath: "events",
      paths: [
        {
          path: "events",
          element: events,
        },
      ],
    },
    {
      name: "dispatching",
      defaultPath: "dispatching",
      paths: [
        {
          path: "dispatching",
          element: dispatching,
        },
      ],
    },
  ],
};

export default ROUTES;
