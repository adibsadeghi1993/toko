import React, { useContext, useEffect, useRef, useState } from "react";
import Top from "./Top";
import Tree from "react-d3-tree";
import "../../App.css";

import { ReactComponent as Person2 } from "../../shared/icons/person2.svg";
import { ReactComponent as People } from "../../shared/icons/people.svg";
import { ReactComponent as Graph } from "../../shared/icons/chart.svg";
import { ReactComponent as Card } from "../../shared/icons/card.svg";
import { ReactComponent as Trash } from "../../shared/icons/trash.svg";
import { ReactComponent as Edit } from "../../shared/icons/edit.svg";
import { Link, useParams } from "react-router-dom";
import { MemmberContext } from "./state/State";
import HeaderDetails from "./panels/HeaderDetails";

const renderRectSvgNode = ({ nodeDatum, toggleNode }, roles) => {
  const getRole = (roleId) => {
    let find = roles.filter((item) => item.role_id === roleId);
    return find[0];
  };

  return (
    <g>
      <rect
        width="120"
        height="70"
        x="-60"
        onClick={toggleNode}
        fill={"#2563EB"}
        strokeWidth=".1"
        rx="5"
        style={{ borderRadius: "5px" }}
      />
      {nodeDatum?.percent && (
        <text
          fill="white"
          x="15"
          dy="15"
          style={{ fontSize: "10px" }}
          strokeWidth=".1"
          onClick={toggleNode}
        >
          {nodeDatum?.percent}
        </text>
      )}
      {nodeDatum?.level_title && (
        <text
          fill="white"
          strokeWidth=".01"
          x="25"
          y="30"
          style={{ fontSize: "10px" }}
          onClick={toggleNode}
        >
          {nodeDatum?.level_title}
        </text>
      )}

      {nodeDatum.name && (
        <text
          fill="white"
          x="27"
          dy="45"
          style={{ fontSize: "10px" }}
          strokeWidth=".01"
          onClick={toggleNode}
        >
          {nodeDatum?.name}
        </text>
      )}
      {nodeDatum?.cellphone_number && (
        <text
          fill="white"
          x="25"
          dy="60"
          style={{ fontSize: "9px" }}
          strokeWidth=".01"
          onClick={toggleNode}
        >
          {nodeDatum?.cellphone_number}
        </text>
      )}
    </g>
  );
};

export default React.memo(() => {
  const [user, setUser] = useState(<Trash />);
  const { id } = useParams();
  const treeContainer = useRef();
  const [translate, setTranslate] = useState();

  const { getNetworkChart, getRoles, roles, network_chart, deactiveUser } =
    useContext(MemmberContext);

  useEffect(() => {
    // const dimensions = treeContainer?.getBoundingClientRect?.();
    // const yOffset = 80;
    // setTranslate({
    //   translate: {
    //     x: dimensions?.width / 2,
    //     y: yOffset,
    //   },
    // });
    !!roles && getNetworkChart({ tooko_user_id: id });
  }, [roles, getNetworkChart]);

  useEffect(() => {
    !!getRoles && getRoles();
  }, [getRoles]);

  const handleclick = () => {
    if (window.confirm("آیا برای غیر فعال کردن کابر مطمئن هستید؟")) {
      deactiveUser({ tooko_user_id: id });
    }
  };
  return (
    <>
      <Top />

      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                فلوچارت
              </h3>
              <HeaderDetails />
            </div>
          </div>

          <div
            id="treeWrapper"
            ref={treeContainer}
            className="h-96 border border-blue-300 m-5 rounded items-center"
          >
            {!!network_chart && (
              <Tree
                data={network_chart}
                orientation="vertical"
                renderCustomNodeElement={(props) =>
                  renderRectSvgNode(props, roles)
                }
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                pathFunc="elbow"
                allowForeignObjects
                nodeSvgShape={{ shape: "none" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
});
