export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getNewsData = async () => {
    isLoading.value = true;

    try {
      const response = await fetch('https://nuxr3.zeabur.app/api/v1/home/news/')
      
      if (response.ok) {
        const { result } = await response.json();
        newsList.value = result;
      }
    } catch (err) {
      alert(err)
    } finally {
      isLoading.value = false;
    }
  }


  return {
    newsList,
    isLoading,
    getNewsData,
  };
};
