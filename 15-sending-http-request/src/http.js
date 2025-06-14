

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || 'Failed to fetch user places');
    }
    return resData.places;
}

export async function updateUserPlaces(places) {
  try {
    const response = await fetch('http://localhost:3000/user-places', {
      method: 'PUT',
      body: JSON.stringify({ places }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message || 'Failed to update user places');
    }
    return resData.message;
  } catch (error) {
    console.error('Error updating user places:', error);
  }
}