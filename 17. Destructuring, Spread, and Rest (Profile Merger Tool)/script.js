const form = document.getElementById('profileForm');
const result = document.getElementById('result');

// Default profile settings
const defaultProfile = {
  username: 'Guest',
  age: 18,
  location: 'Unknown',
  interests: ['reading', 'music']
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const location = document.getElementById('location').value.trim();

  // Create user profile with spread operator
  const userInput = {
    ...(username && { username }),
    ...(age && { age }),
    ...(location && { location })
  };

  const mergedProfile = {
    ...defaultProfile,
    ...userInput
  };

  // Destructure and collect remaining props using rest
  const { username: name, age: userAge, ...rest } = mergedProfile;

  result.innerText = JSON.stringify(
    {
      name,
      userAge,
      ...rest
    },
    null,
    2
  );
});
