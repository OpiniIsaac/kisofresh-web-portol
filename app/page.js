'use client'
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [openTrackAnalyzePrices, setOpenTrackAnalyzePrices] = useState(false);
  const [openSmartFarming, setOpenSmartFarming] = useState(false);
  const [openMarketNews, setOpenMarketNews] = useState(false);
  const [openAgricultureTips, setOpenAgricultureTips] = useState(false)
  const [email, setEmail] = useState("");

  const handleOpenTrackAnalyzePrices = () => setOpenTrackAnalyzePrices(true);
  const handleCloseTrackAnalyzePrices = () => setOpenTrackAnalyzePrices(false);

  const handleOpenSmartFarming = () => setOpenSmartFarming(true);
  const handleCloseSmartFarming = () => setOpenSmartFarming(false);

  const handleOpenMarketNews = () => setOpenMarketNews(true);
  const handleCloseMarketNews = () => setOpenMarketNews(false);

  const handleOpenAgricultureTips = () => setOpenAgricultureTips(true); 
  const handleCloseAgricultureTips = () => setOpenAgricultureTips(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
        <header className="flex flex-col items-center py-3 px-5">
      <h1 className="text-4xl mb-0 text-blue-500">KisoIndex</h1>
      <p className="text-lg text-gray-500">Data for informed agricultural decisions.</p>
    </header>
    <main className="container mx-auto py-5">    
      <section className="flex items-center mb-5">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl">Track & Analyze Prices</h2>
          <p>Gain insights into crop prices. Make informed decisions.</p>
          <Button onClick={handleOpenTrackAnalyzePrices}> Subscribe</Button>
          <Modal
  open={openTrackAnalyzePrices}
  onClose={handleCloseTrackAnalyzePrices}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{
    position: 'absolute',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Subscribe to KisoIndex
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Subscribe to our newsletter to receive updates on crop prices, agricultural news, and tips for informed farming decisions.
    </Typography>
    <TextField
      id="email-input"
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      value={email}
      onChange={handleEmailChange}
      sx={{ mt: 2 }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button onClick={handleCloseTrackAnalyzePrices} sx={{ mr: 2 }}>
        Close
      </Button>
      <Button variant="contained" color="primary" onClick={handleCloseTrackAnalyzePrices}>
        Subscribe
      </Button>
    </Box>
  </Box>
</Modal>

        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src="/grain.jpeg" alt="grain" className="w-full rounded-lg shadow" height={200} width={200}/>
        </div>
      </section>
      <section className="flex items-center mb-5">
        <div className="w-full md:w-1/2">
          <h3 className="text-xl">Source Produce</h3>
          <p>Traceability simplified. Tap into our vast database of farmers.</p>
          <select id="crop-filter" className="form-select form-select-lg mb-2">
            <option value="corn">Corn</option>
            <option value="avacado">Avocado</option>
            <option value="coffee">Coffee</option>
            <option value="cocoa">Cocoa</option>
            <option value="cotton">Cotton</option>
            <option value="soya">Soya</option>
          </select>
          <label htmlFor="quantity-filter" className="me-2"> Quantity (tonnes):</label>
          <input type="number" id="quantity-filter" className="form-control form-control-lg mb-2"/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Source</button>
          <p className="text-gray-500 text-xs mt-0">Are you a farmer? <a href="https://placeholder.com/" className="text-blue-500 text-decoration-none">Register here</a></p>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src="/crops.jpg" alt="crops" className="w-full rounded-lg shadow" height={200} width={200}/>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col">
          <div className="feature card text-center h-auto shadow-sm bg-white">
            <h3 className="text-xl">Smart Farming</h3>
            <p>Beat the elements using IoT data</p>
            <Image src="/data.jpeg" alt="data" className="w-full rounded-lg shadow" height={200} width={200}/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpenSmartFarming}>
  Subscribe 
</button>
<Modal
  open={openSmartFarming}
  onClose={handleCloseSmartFarming}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Subscribe to Smart Farming Updates
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Subscribe to receive updates and insights on smart farming techniques and IoT data for optimized agricultural practices.
    </Typography>
    <TextField
      id="email-input"
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      value={email}
      onChange={handleEmailChange}
      sx={{ mt: 2 }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button onClick={handleCloseSmartFarming} sx={{ mr: 2 }}>
        Close
      </Button>
      <Button variant="contained" color="primary" onClick={handleCloseSmartFarming}>
        Subscribe
      </Button>
    </Box>
  </Box>
</Modal>

          </div>
        </div>
        <div className="col">
          <div className="feature card text-center h-auto shadow-sm bg-white">
            <h3 className="text-xl">Market News</h3>
            <p>Stay ahead with global agricultural news.</p>
            <Image src="/export.jpg" alt="news" className="w-full rounded-lg" height={200} width={200}/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpenMarketNews}>
  Sign Up
</button>
<Modal
  open={openMarketNews}
  onClose={handleCloseMarketNews}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Subscribe to Market News Updates
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Subscribe to receive updates on global agricultural news and market trends to stay ahead in the industry.
    </Typography>
    <TextField
      id="email-input"
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      value={email}
      onChange={handleEmailChange}
      sx={{ mt: 2 }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button onClick={handleCloseMarketNews} sx={{ mr: 2 }}>
        Close
      </Button>
      <Button variant="contained" color="primary" onClick={handleCloseMarketNews}>
        Subscribe
      </Button>
    </Box>
  </Box>
</Modal>


            <ul id="newsList"></ul>
          </div>
        </div>
        <div className="col">
          <div className="feature card text-center h-auto shadow-sm bg-white">
            <h3 className="text-xl">Agriculture Tips</h3>
            <p>Learn best practices for your farm.</p>
            <Image src="/cow.jpg" alt="tips" className="w-full rounded-lg" height={200} width={200}/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpenAgricultureTips}>
              Sign Up
            </button>
            <Modal
              open={openAgricultureTips}
              onClose={handleCloseAgricultureTips}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Subscribe to Agriculture Tips
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Subscribe to receive valuable tips and best practices to help you optimize your agricultural operations and improve your farms yield.
                </Typography>
                <TextField
                  id="email-input"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={handleEmailChange}
                  sx={{ mt: 2 }}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                  <Button onClick={handleCloseAgricultureTips} sx={{ mr: 2 }}>
                    Close
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleCloseAgricultureTips}>
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Modal>
            <ul id="newsList"></ul>
          </div>
        </div>
      </section>  
    </main>
    <footer className="text-center py-3 bg-green-500 text-white">
      <p>KisoIndex - a product of KisoFresh. Member of the Food Consortium. All rights reserved.</p>
    </footer>
    </>
  );
}
