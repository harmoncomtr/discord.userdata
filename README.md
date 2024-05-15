## User API Data Fetcher

This Node.js NPM package allows you to easily fetch user data from Discord.

### Installation

```bash
npm install discord.userdata
```

### Usage

```javascript
const getUserData = require('discord.userdata').getUserData;

// Get user data for userId 1088812712873689208
getUserData('1088812712873689208')
  .then((userData) => {
    console.log('User data:', userData);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });
```

### Example Output

```json
{
  id: '1088812712873689208',
  username: 'harmon.com.tr',
  discriminator: '0',
  joinedAt: 'March 24, 2023',
  avatarURL: 'https://cdn.discordapp.com/avatars/1088812712873689208/a_87351c80cd5988144790cc205181544d.gif',
  bannerURL: 'https://cdn.discordapp.com/banners/1088812712873689208/a_b3a60b041f20af0488824b4a7617eccf.gif',
  customStatus: null,
  aboutMe: null,
  publicName: 'Harmon'
}
```

### API Endpoint

This package interacts with the following API endpoint:

```
https://harmondiscordbots-userapi.hf.space/users/{userId}
```

### Error Handling

The `getUserData` function handles errors that occur during the API request. If an error occurs, it logs the error to the console and throws the error object, allowing you to handle it in your application.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

### License

This project is licensed under the MIT License.
