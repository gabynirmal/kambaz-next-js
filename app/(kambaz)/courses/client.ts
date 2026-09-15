import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`,
  );
  return data;
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course,
  );
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course,
  );
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`,
  );
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module,
  );
  return response.data;
};
export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/modules/${moduleId}`,
  );
  return response.data;
};
export const updateModule = async (courseId: string, module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${courseId}/modules/${module._id}`,
    module,
  );
  return data;
};
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${HTTP_SERVER}/api/users/${userId}/courses/${courseId}/enroll`,
  );
  return data;
};

export const unenrollUserInCourse = async (
  userId: string,
  courseId: string,
) => {
  const { data } = await axiosWithCredentials.delete(
    `${HTTP_SERVER}/api/users/${userId}/courses/${courseId}/unenroll`,
  );
  return data;
};
export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/users`,
  );
  return response.data;
};
