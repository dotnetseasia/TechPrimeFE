import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Autocomplete, Stack } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from 'react-rainbow-components';
import Logo from "../src/images/Logo.svg";
import CreateProject from "../src/images/create-project.svg";
import ProjectList from "../src/images/Project-list.svg";
import Dashboard from "../src/images/Dashboard.svg";
import axios from "axios";
import { toast } from "react-toastify";
import BackArrow from "../src/images/back arrow.svg"

function App() {
  const comingSoon = () => {
    alert("Coming Soon");
  };

  const [selecteddeoartment, setselecteddepartment] = useState('');
  const [selectedEndDate, setselectedEndDate] = useState('');
  const [selectedStartdate, setselectedStartDate] = useState('');
  const [selectedCategory, setselectedCategory] = useState('');
  const [selectedPriority, setselectedPriority] = useState('');
  const [selectedType, setselectedType] = useState('');
  const [selectedDivision, setselectedDivision] = useState('');
  const [selectedLocation, setselectedLocation] = useState('');
  const [selectedProject, setselectedProject] = useState('');
  const [selectedReason, setSelectedReason] = useState("");
  const [showHelpText, setshowHelpText] = React.useState(false);
  const [showHelpText1, setshowHelpText1] = React.useState(false);
  const [showHelpText2, setshowHelpText2] = React.useState(false);
  const [showHelpText4, setshowHelpText4] = React.useState(false);
  const [showHelpText5, setshowHelpText5] = React.useState(false);
  const [showHelpText6, setshowHelpText6] = React.useState(false);
  const [showHelpText7, setshowHelpText7] = React.useState(false);
  const [showHelpText8, setshowHelpText8] = React.useState(false);
  const [showHelpText9, setshowHelpText9] = React.useState(false);
  const [showHelpText0, setshowHelpText0] = React.useState(false);

  const Locations = [
    {
      id: "Mohali",
      state: "Mohali",
    },

    {
      id: "Chandigarh",
      state: "Chandigarh",
    },
    {
      id: "Noida",
      state: "Noida",
    },
    {
      id: "Pune",
      state: "Pune",
    },
    {
      id: "Bengalore",
      state: "Bengalore",
    },
    {
      id: "Hyderabad",
      state: "Hyderabad",
    },
  ];

  const Priority = [
    {
      id: "High",
      state: "High",
    },
    {
      id: "Medium",
      state: "Medium",
    },
    {
      id: "Low",
      state: "Low",
    },
  ];

  const Reason = [
    {
      id: "Critical",
      state: "Critical",
    },
    {
      id: "Non-Critical",
      state: "Non-Critical",
    },

  ];

  const Type = [
    {
      id: "Internal",
      state: "Internal",
    },
    {
      id: "External",
      state: "External",
    },
  ];

  const Category = [
    {
      id: "Quality A",
      state: "Quality A",
    },
    {
      id: "Quality B",
      state: "Quality B",
    },
    {
      id: "Quality C",
      state: "Quality C",
    },
  ];

  const Department = [
    {
      id: "DotNet",
      state: "DotNet",
    },
    {
      id: "PHP",
      state: "PHP",
    },
    {
      id: "QA",
      state: "QA",
    },
  ];

  const Division = [
    {
      id: "Division A",
      state: "Division A",
    },
    {
      id: "Division B",
      state: "Division B",
    },
    {
      id: "Division C",
      state: "Division C",
    },
  ];

  let inputs: any = {
    projectname: selectedProject,
    reason: selectedReason,
    type: selectedType,
    division: selectedDivision,
    category: selectedCategory,
    priority: selectedPriority,
    dept: selecteddeoartment,
    location: selectedLocation,
    startdate: selectedStartdate,
    enddate: selectedEndDate,
    status: "Registered"
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  function cleardata() {
    setselectedProject("");
    setSelectedReason("");
    setselectedType("");
    setselectedDivision("");
    setselectedCategory("");
    setselectedPriority("");
    setselecteddepartment("");
    setselectedStartDate("");
    setselectedEndDate("");
    setselectedLocation("");
  }
  const mindate = new Date().getFullYear().toString();

  const addProjectdata = async () => {
    debugger;
    try {
      const response = await axios.post("https://localhost:7292/api/Project", inputs);

      if (response.data.isError) {
        // Handle specific error conditions if needed
      } else {
        if (response.data.message === "Project already exists.") {
          alert("Project already exists. Please choose a different name.");
        } else {
          alert("Project Added Successfully");
          handleRefresh();
        }
      }
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Error adding project. Please try again.");
    }
  };


  const getDate = (dateObject: Date) => {
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}T00:00:00Z`;
  }

  return (
    <>
      <Stack direction="row">
        <Box className="sidebar">
          <Stack direction="column" sx={{ gap: "30px" }}>
            <Box sx={{ cursor: "pointer" }} onClick={comingSoon}>
              <img src={Dashboard} alt="Dashboard Icon" />
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={comingSoon}>
              <img src={ProjectList} alt="Project List Icon" />
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <hr />
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={comingSoon}>
              <img src={CreateProject} alt="Create Project Icon" />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            className="topCircle"
            sx={{
              height: "140px",
              background: "#035097",
              borderRadius: "0 0 50px 50px",
            }}
          >
            <button className="text-white fs-5 fw-bold d-flex align-items-center createP">
              <img src={BackArrow} alt="icon" />
              <span className="ms-4" style={{ whiteSpace: "nowrap" }}>Create Project</span></button>
            <img src={Logo} alt="logo" className="img-fluid" />
          </Box>
          <Box
            sx={{
              height: "calc(100vh - 110px)",
              padding: "16px",
              marginInline: "20px",
              marginTop: "-30px",
              borderRadius: "12px",
              background: "#fff",

            }}
          >
            <Grid
              direction="row"
              justifyContent="space-between"
              container
              spacing={2}
            >
              <Grid item xs={12} md={7}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Enter Project Theme"
                  variant="outlined"
                  required
                  onChange={(e: any) => {
                    setshowHelpText(false);
                    setselectedProject(e.currentTarget.value)


                  }}
                  error={showHelpText && !selectedProject}
                  helperText={showHelpText && !selectedProject ? "Project is required" : ""}

                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "100px", textTransform: "capitalize" }}
                  onClick={() => {
                    debugger
                    if (!selectedProject || !selectedReason || !selectedCategory || !selectedDivision || !selectedType || !selectedLocation || !selectedPriority || !selecteddeoartment || !selectedEndDate || !selectedStartdate) 
                    {
                      setshowHelpText(true);
                      setshowHelpText1(true);
                      setshowHelpText2(true);
                      setshowHelpText4(true);
                      setshowHelpText5(true);
                      setshowHelpText6(true);
                      setshowHelpText7(true);
                      setshowHelpText8(true);
                      setshowHelpText9(true);
                      setshowHelpText0(true);
                    }
                    else {
                      addProjectdata()
                      // comingSoon1();
                    }

                  }

                  }

                >
                  Save Project
                </Button>
              </Grid>
            </Grid>
            <Box>
              <Grid xs={12} md={11} sx={{ mt: 5 }} container spacing={4}>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth>

                    <Autocomplete
                      disableClearable={true}
                      fullWidth

                      sx={{
                        lineHeight: "0.80em",
                      }}
                      id="outlined-basic"
                      options={Reason}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event: any, value: any) => {
                        setSelectedReason(value?.state ?? "")
                        setshowHelpText1(false);

                      }}
                      renderInput={(params: any) => (
                        <TextField
                          required
                          {...params}
                          fullWidth
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          label="Reason"
                          placeholder="Select Reason"
                          error={showHelpText1 && !selectedReason}
                          helperText={showHelpText1 && !selectedReason ? "Reason is required" : ""}

                        />
                      )}
                    />

                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth>

                    <Autocomplete
                      disableClearable={true}
                      fullWidth
                      sx={{
                        lineHeight: "0.80em",
                      }}
                      id="outlined-basic"
                      options={Type}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event: any, value: any) => {
                        setselectedType(value?.state ?? "")
                        setshowHelpText2(false);

                      }}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          fullWidth
                          required
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          placeholder="Select Type"
                          label="Type"
                          error={showHelpText2 && !selectedType}
                          helperText={showHelpText2 && !selectedType ? "Type is required" : ""}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth>
                    <Autocomplete
                      disableClearable={true}
                      fullWidth
                      sx={{
                        lineHeight: "0.80em",
                      }}

                      id="outlined-basic"
                      options={Division}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event: any, value: any) => {
                        setselectedDivision(value?.state ?? "")
                        setshowHelpText4(false);
                      }}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          fullWidth
                          required
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          placeholder="Select Division"
                          label="Division"
                          error={showHelpText4 && !selectedDivision}
                          helperText={showHelpText4 && !selectedDivision ? "Division is required" : ""}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth>

                    <Autocomplete
                      disableClearable={true}
                      fullWidth
                      sx={{
                        lineHeight: "0.80em",
                      }}
                      id="outlined-basic"
                      options={Category}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event, value) => {
                        setselectedCategory(value?.state ?? "")
                        setshowHelpText5(false);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          required
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          placeholder="Select Category"
                          label="Category"
                          error={showHelpText5 && !selectedCategory}
                          helperText={showHelpText5 && !selectedCategory ? "Category is required" : ""}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth>

                    <Autocomplete
                      disableClearable={true}
                      fullWidth
                      sx={{
                        lineHeight: "0.80em",
                      }}
                      id="outlined-basic"
                      options={Priority}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event, value) => {
                        setshowHelpText6(false);
                        setselectedPriority(value?.state ?? "")
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          required
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          placeholder="Select Priority"
                          label="Priority"
                          error={showHelpText6 && !selectedPriority}
                          helperText={showHelpText6 && !selectedPriority ? "Priority is required" : ""}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth>

                    <Autocomplete
                      disableClearable={true}
                      fullWidth
                      sx={{
                        lineHeight: "0.80em",
                      }}
                      id="outlined-basic"
                      options={Department}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event, value) => {
                        setshowHelpText7(false);
                        setselecteddepartment(value?.state ?? "")
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          required
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          placeholder="Select Department"
                          label="Department"
                          error={showHelpText7 && !selecteddeoartment}
                          helperText={showHelpText7 && !selecteddeoartment ? "Department is required" : ""}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Start Date as per Project Plan"
                        borderRadius="semi-square"
                        style={{ marginTop: '-6px' }}
                        value={selectedStartdate}
                        minDate={new Date(mindate)}
                        maxDate={
                          new Date(
                            new Date().getFullYear() + 0,
                            11,
                            31
                          )
                        }

                        onChange={(newValue: any) => {
                          let dateT = getDate(newValue);
                          setselectedStartDate(dateT);
                          setshowHelpText8(false);
                        }}

                        error={showHelpText8 && !selectedStartdate ? "Start Date is required" : ""}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="End Date as per Project Plan"
                      borderRadius="semi-square"
                      disabled={!selectedStartdate}
                      value={selectedEndDate}
                      minDate={new Date(selectedStartdate)}
                      maxDate={
                        new Date(
                          new Date().getFullYear() + 0,
                          11,
                          31
                        )
                      }
                      // value={startDate}
                      onChange={(newValue: any) => {
                        let dateT = getDate(newValue);
                        setselectedEndDate(dateT);
                        setshowHelpText9(false);
                      }}
                      error={showHelpText9 && !selectedEndDate ? "End Date is required" : ""}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <FormControl fullWidth sx={{ marginTop: "8px" }}>

                    <Autocomplete
                      disableClearable={true}
                      // value={""}
                      fullWidth
                      sx={{
                        lineHeight: "0.80em",
                      }}
                      id="outlined-basic"
                      options={Locations}
                      getOptionLabel={(option) => option.id}
                      onChange={async (event, value) => {
                        setshowHelpText0(false);
                        setselectedLocation(value?.state ?? "")
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          id="outlined-basic"
                          name="element.name"
                          variant="outlined"
                          placeholder="Select Location"
                          label="Location"
                          required
                          error={showHelpText0 && !selectedLocation}
                          helperText={showHelpText0 && !selectedLocation ? "Location is required" : ""}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid xs={12} md={11} sx={{ mt: 1 }} container spacing={2}>
                <Grid item xs={12} sm={6} md={4}></Grid>
                <Grid item xs={12} sm={6} md={4}></Grid>
                <Grid item xs={12} sm={6} md={4} style={{ fontWeight: 'bold' }}>
                  Status: Registered
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default App;
