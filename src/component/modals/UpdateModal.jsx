import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Title from "../form/Title";
import PropTypes from "prop-types";
import Status from "../form/Status";
import { Fragment, useRef } from "react";
import Description from "../form/Description";
import { useSelector } from "react-redux";
import { useGetTaskByIdQuery } from "../../features/taskApi/taskApiSlice";
import LoadingSpinner from "../LoadingSpinner";

const UpdateModal = ({ id, closeModal, isOpen, submitForm }) => {
  const { data: task, isLoading } = useGetTaskByIdQuery(id, {
    skip: !id,
  });
  const errors = useSelector((state) => state.formValidation.errors);
  const formRef = useRef();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h1"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Task Details
                </DialogTitle>
                {isLoading ? (
                  <LoadingSpinner modal={true} />
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={submitForm}
                    className="mt-2 space-y-2.5"
                  >
                    <Title value={task?.name} error={errors?.title} />
                    <Description
                      value={task?.description}
                      error={errors?.description}
                    />
                    <Status value={task?.status} error={errors?.status} />
                  </form>
                )}
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    onClick={() => {
                      if (formRef.current) {
                        formRef.current.dispatchEvent(
                          new Event("submit", {
                            cancelable: true,
                            bubbles: true,
                          })
                        );
                      }
                    }}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateModal.propTypes = {
  handleDelete: PropTypes.func,
  submitForm: PropTypes.func,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  id: PropTypes.string,
};

export default UpdateModal;
