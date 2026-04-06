import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const fetchAllAssignments = async () => {
  const { data } = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/assignments`,
  );
  return data;
};

export const findAssignmentsforCourse = async (cid: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${cid}/assignments`,
  );
  return data;
};

export const createAssignment = async (cid: string, assignment: any) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${cid}/assignments`,
    assignment,
  );
  return data;
};

export const deleteAssignment = async (cid: string, aid: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${COURSES_API}/${cid}/assignments/${aid}`,
  );
  return data;
};

export const updateAssignment = async (cid: string, assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${cid}/assignments/${assignment._id}`,
    assignment,
  );
  return data;
};
