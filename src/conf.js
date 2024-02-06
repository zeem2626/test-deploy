console.log(process.env.VITE_API);
const conf = {
   api: `${import.meta.env.VITE_API}/api`,
};

export default conf;
