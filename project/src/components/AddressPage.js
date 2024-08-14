// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddressPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     pincode: '',
//     address: '',
//     city: '',
//     state: ''
//   });

//   const [addresses, setAddresses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [editingAddressId, setEditingAddressId] = useState(null);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();
//   const apiUrl = "http://127.0.0.1:8080/api/buy";
//   const token = localStorage.getItem('token'); // Authentication token from localStorage

//   useEffect(() => {
//     // Fetch addresses from the backend
//     const fetchAddresses = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8080/api/buy/get/buy', {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setAddresses(response.data);
//       } catch (error) {
//         console.error('Error fetching addresses:', error);
//         setError('Failed to fetch addresses.');
//       }
//     };

//     fetchAddresses();
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         // Update existing address
//         await axios.put(`http://127.0.0.1:8080/api/buy/put/${editingAddressId}`, formData, {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setAddresses(addresses.map(address =>
//           address.aid === editingAddressId ? { ...formData, aid: editingAddressId } : address
//         ));
//       } else {
//         // Add new address
//         await axios.post(apiUrl, formData, {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setAddresses([...addresses, { ...formData, aid: addresses.length + 1 }]);
//       }
//       setFormData({
//         name: '',
//         mobile: '',
//         pincode: '',
//         address: '',
//         city: '',
//         state: ''
//       });
//       setIsModalOpen(false);
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error saving address:', error);
//       setError('Failed to save address.');
//     }
//   };

//   const handleAddNew = () => {
//     setFormData({
//       name: '',
//       mobile: '',
//       pincode: '',
//       address: '',
//       city: '',
//       state: ''
//     });
//     setIsModalOpen(true);
//     setEditMode(false);
//   };

//   const handleEdit = (address) => {
//     setFormData(address);
//     setEditingAddressId(address.aid); // Use address.aid for setting editing address ID
//     setIsModalOpen(true);
//     setEditMode(true);
//   };

//   const handleDeliverHere = (address) => {
//     localStorage.setItem('selectedAddress', JSON.stringify(address));
//     navigate('/payment');
//   };

//   const deleteAddress = async (aid) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8080/api/buy/delete/${aid}`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       setAddresses(addresses.filter(address => address.aid !== aid));
//     } catch (error) {
//       console.error('Error deleting address:', error);
//       setError('Failed to delete address.');
//     }
//   };

//   return (
//     <div style={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//       <div style={{
//         flex: 1,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         padding: '20px',
//         boxSizing: 'border-box'
//       }}>
//         <div style={{
//           backgroundColor: 'rgba(255, 255, 204, 0.9)', // Light yellow background for content area
//           padding: '20px',
//           boxSizing: 'border-box',
//           boxShadow: '0px 10px 20px rgba(255, 204, 0, 0.5)', // Yellow shadow
//           borderRadius: '8px',
//           maxWidth: '800px',
//           margin: 'auto'
//         }}>
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h2 style={{ marginBottom: '20px', color: '#FFCC00' }}>Saved Addresses</h2>
//             <button
//               onClick={handleAddNew}
//               style={{
//                 padding: '10px',
//                 backgroundColor: '#FFCC00', // Yellow button
//                 color: 'white',
//                 borderRadius: '3px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 marginBottom: '20px'
//               }}
//             >
//               Add New Address
//             </button>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}>
//               {addresses.map(address => (
//                 <div
//                   key={address.aid}
//                   style={{
//                     backgroundColor: 'white',
//                     padding: '20px',
//                     borderRadius: '5px',
//                     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//                     marginBottom: '10px'
//                   }}
//                 >
//                   <p><strong>Name:</strong> {address.name}</p>
//                   <p><strong>Mobile:</strong> {address.mobile}</p>
//                   <p><strong>Pincode:</strong> {address.pincode}</p>
//                   <p><strong>Address:</strong> {address.address}</p>
//                   <p><strong>City:</strong> {address.city}</p>
//                   <p><strong>State:</strong> {address.state}</p>
//                   <button
//                     onClick={() => handleDeliverHere(address)}
//                     style={{
//                       padding: '4px',
//                       width: '20%',
//                       backgroundColor: '#28a745',
//                       color: 'white',
//                       borderRadius: '3px',
//                       border: 'none',
//                       cursor: 'pointer',
//                       marginRight: '10px'
//                     }}
//                   >
//                     Deliver Here
//                   </button>
//                   <button
//                     onClick={() => handleEdit(address)}
//                     style={{
//                       padding: '4px',
//                       width: '20%',
//                       backgroundColor: '#FFCC00',
//                       color: 'white',
//                       borderRadius: '3px',
//                       border: 'none',
//                       cursor: 'pointer',
//                       marginRight: '10px'
//                     }}
//                   >
//                     Edit Address
//                   </button>
//                   <button
//                     onClick={() => deleteAddress(address.aid)}
//                     style={{
//                       padding: '4px',
//                       width: '20%',
//                       backgroundColor: '#dc3545',
//                       color: 'white',
//                       borderRadius: '3px',
//                       border: 'none',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     Delete Address
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {isModalOpen && (
//             <div style={{
//               position: 'fixed',
//               top: '0',
//               left: '0',
//               right: '0',
//               bottom: '0',
//               backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}>
//               <div style={{
//                 backgroundColor: 'white',
//                 padding: '20px',
//                 borderRadius: '5px',
//                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//                 width: '100%',
//                 maxWidth: '500px'
//               }}>
//                 <h2 style={{ marginBottom: '20px', color: '#FFCC00' }}>{editMode ? 'Edit Address' : 'Enter Delivery Address'}</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number</label>
//                     <input
//                       type="text"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Pincode</label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Address</label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>City</label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>State</label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//                     <button
//                       type="submit"
//                       style={{
//                         padding: '10px',
//                         backgroundColor: '#FFCC00',
//                         color: 'white',
//                         borderRadius: '3px',
//                         border: 'none',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Save Address
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setIsModalOpen(false)}
//                       style={{
//                         padding: '10px',
//                         backgroundColor: '#FFCC00',
//                         color: 'white',
//                         borderRadius: '3px',
//                         border: 'none',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddressPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    email: '' // Add email to the form data state
  });

  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const apiUrl = "http://127.0.0.1:8080/api/buy";
  const token = localStorage.getItem('token'); // Authentication token from localStorage
  const userEmail = localStorage.getItem('email'); // Assuming user's email is stored in localStorage

  useEffect(() => {
    // Fetch addresses using the user's email
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get/buy/email/${userEmail}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        setError('Failed to fetch addresses.');
      }
    };

    if (userEmail) {
      fetchAddresses();
    }
  }, [token, userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Update existing address
        await axios.put(`${apiUrl}/put/${editingAddressId}`, formData, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setAddresses(addresses.map(address =>
          address.aid === editingAddressId ? { ...formData, aid: editingAddressId } : address
        ));
      } else {
        // Add new address
        await axios.post(apiUrl, formData, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setAddresses([...addresses, { ...formData, aid: addresses.length + 1 }]);
      }
      setFormData({
        name: '',
        mobile: '',
        pincode: '',
        address: '',
        city: '',
        state: '',
        email: '' // Reset email field
      });
      setIsModalOpen(false);
      setEditMode(false);
    } catch (error) {
      console.error('Error saving address:', error);
      setError('Failed to save address.');
    }
  };

  const handleAddNew = () => {
    setFormData({
      name: '',
      mobile: '',
      pincode: '',
      address: '',
      city: '',
      state: '',
      email: '' // Initialize email field for new address
    });
    setIsModalOpen(true);
    setEditMode(false);
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingAddressId(address.aid);
    setIsModalOpen(true);
    setEditMode(true);
  };

  const handleDeliverHere = (address) => {
    localStorage.setItem('selectedAddress', JSON.stringify(address));
    navigate('/payment');
  };

  const deleteAddress = async (aid) => {
    try {
      await axios.delete(`${apiUrl}/delete/${aid}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setAddresses(addresses.filter(address => address.aid !== aid));
    } catch (error) {
      console.error('Error deleting address:', error);
      setError('Failed to delete address.');
    }
  };

  return (
    <div style={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        flex: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 204, 0.9)', // Light yellow background for content area
          padding: '20px',
          boxSizing: 'border-box',
          boxShadow: '0px 10px 20px rgba(255, 204, 0, 0.5)', // Yellow shadow
          borderRadius: '8px',
          maxWidth: '800px',
          margin: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '20px', color: '#FFCC00' }}>Saved Addresses</h2>
            <button
              onClick={handleAddNew}
              style={{
                padding: '10px',
                backgroundColor: '#FFCC00', // Yellow button
                color: 'white',
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              Add New Address
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}>
              {addresses.map(address => (
                <div
                  key={address.aid}
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    marginBottom: '10px'
                  }}
                >
                  <p><strong>Name:</strong> {address.name}</p>
                  <p><strong>Mobile:</strong> {address.mobile}</p>
                  <p><strong>Pincode:</strong> {address.pincode}</p>
                  <p><strong>Address:</strong> {address.address}</p>
                  <p><strong>City:</strong> {address.city}</p>
                  <p><strong>State:</strong> {address.state}</p>
                  <p><strong>Email:</strong> {address.email}</p> {/* Display email */}
                  <button
                    onClick={() => handleDeliverHere(address)}
                    style={{
                      padding: '4px',
                      width: '20%',
                      backgroundColor: '#28a745',
                      color: 'white',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                  >
                    Deliver Here
                  </button>
                  <button
                    onClick={() => handleEdit(address)}
                    style={{
                      padding: '4px',
                      width: '20%',
                      backgroundColor: '#FFCC00',
                      color: 'white',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                  >
                    Edit Address
                  </button>
                  <button
                    onClick={() => deleteAddress(address.aid)}
                    style={{
                      padding: '4px',
                      width: '20%',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Delete Address
                  </button>
                </div>
              ))}
            </div>
          </div>

          {isModalOpen && (
            <div>
              <h2>{editMode ? 'Edit Address' : 'Add New Address'}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                ></textarea>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    marginBottom: '10px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '10px',
                    backgroundColor: '#FFCC00',
                    color: 'white',
                    borderRadius: '3px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  {editMode ? 'Save Changes' : 'Add Address'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
