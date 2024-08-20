import axios from "axios";
import { Stream } from "stream";

export const checkValidateUrlImage = async (
  url: string,
  setLoading: (loading: boolean) => void
) => {
  try {
    setLoading(true);
    const fullUrl = `${
      process.env.NEXT_PUBLIC_APP_URL
    }/api/image-proxy?url=${encodeURIComponent(url)}`;

    const { data } = await axios.get<Blob>(fullUrl, {
      responseType: "blob",
    });

    const objectUrl = URL.createObjectURL(data);

    return {
      isValid: true,
      url: fullUrl,
      objectUrl,
    };
  } catch (error) {
    return {
      isValid: false,
      url,
      objectUrl: "",
    };
  } finally {
    setLoading(false);
  }
};
